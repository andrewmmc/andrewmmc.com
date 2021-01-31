import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Bio from 'components/Bio';
import Layout from 'components/Layout';
import Seo from 'components/Seo';
import PostList from 'components/PostList';

const Index = () => {
  const data = useStaticQuery(pageQuery);
  const { mediumId } = data.prismicSettings.data;
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      try {
        const res = await fetch(`.netlify/functions/posts`);
        if (!res.ok) throw new Error(res.statusText);
        const { items } = await res.json();
        setPosts(items.slice(0, 5));
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    }

    fetchPosts();
  }, []);

  return (
    <Layout>
      <Seo />
      <Bio mb={12} />
      <PostList
        title="Blog posts"
        posts={posts}
        loading={loading}
        moreLink={`https://medium.com/${mediumId.text}`}
      />
    </Layout>
  );
};

export default Index;

const pageQuery = graphql`
  query IndexQuery {
    prismicSettings(uid: { eq: "settings" }) {
      data {
        mediumId: medium_id {
          text
        }
      }
    }
  }
`;

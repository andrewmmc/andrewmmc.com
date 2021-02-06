import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from 'components/Layout';
import Seo from 'components/Seo';
import PostList from 'components/PostList';

const Index = () => {
  const data = useStaticQuery(pageQuery);
  const { mediumId } = data.prismicSettings.data;
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch(`.netlify/functions/posts`);
        if (!res.ok) throw new Error(res.statusText);
        const { items } = await res.json();
        setPosts(items);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
      setLoading(false);
    }

    fetchPosts();
  }, []);

  return (
    <Layout>
      <Seo />
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

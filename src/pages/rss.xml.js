import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';
import { getDefaultBlogPosts } from '../utils/blog';

export async function GET(context) {
  const posts = getDefaultBlogPosts(await getCollection('blog'));
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map(({ entry, url }) => ({
      ...entry.data,
      link: url,
    })),
  });
}

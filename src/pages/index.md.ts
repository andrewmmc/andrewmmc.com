import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import { getDefaultBlogPosts } from '../utils/blog';

export const GET: APIRoute = async ({ site }) => {
  const posts = getDefaultBlogPosts(
    (await getCollection('blog'))
      .filter((post) => post.data.pubDate != null)
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()),
  );

  const lines = [
    `# ${SITE_TITLE}`,
    '',
    SITE_DESCRIPTION,
    '',
    '## Writing',
    '',
    ...posts.map((post) => `- [${post.entry.data.title}](${new URL(post.url, site)})`),
    '',
  ];

  return new Response(lines.join('\n'));
};

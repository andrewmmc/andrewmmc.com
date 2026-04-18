import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const posts = (await getCollection('blog'))
    .filter((post) => post.data.pubDate != null)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  const lines = [
    '# All posts',
    '',
    ...posts.map((post) => `- [${post.data.title}](${new URL(`/blog/${post.id}/`, site)})`),
    '',
  ];

  return new Response(lines.join('\n'));
};

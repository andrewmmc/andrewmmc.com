import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { getBlogStaticPaths, type BlogPageProps } from '../../utils/blog';

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return getBlogStaticPaths(posts);
}

export const GET: APIRoute = async ({ props }) => {
  const { post } = props as BlogPageProps;

  const lines = [
    `# ${post.data.title}`,
    '',
    ...(post.data.description ? [post.data.description, ''] : []),
    post.body ?? '',
    '',
  ];

  return new Response(lines.join('\n'));
};

import type { APIRoute } from 'astro';
import { type CollectionEntry, getCollection } from 'astro:content';

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map((post) => ({
    params: { slug: post.id },
    props: { post },
  }));
}

export const GET: APIRoute = async ({ props }) => {
  const post = props.post as CollectionEntry<'blog'>;

  const lines = [
    `# ${post.data.title}`,
    '',
    ...(post.data.description ? [post.data.description, ''] : []),
    post.body ?? '',
    '',
  ];

  return new Response(lines.join('\n'));
};

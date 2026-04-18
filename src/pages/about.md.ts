import type { APIRoute } from 'astro';
import { getEntry } from 'astro:content';

export const GET: APIRoute = async () => {
  const about = await getEntry('pages', 'about');
  if (!about) {
    return new Response('Not found', { status: 404 });
  }

  const lines = [`# ${about.data.title}`, '', about.body ?? '', ''];

  return new Response(lines.join('\n'));
};

import type { APIRoute } from 'astro';
import { getEntry } from 'astro:content';
import { AWARDS, CERTIFICATIONS, LANGUAGES, SKILLS, TALKS } from '../data/about';

function formatCred(item: { title: string; meta?: string; url?: string }): string {
  const detail = item.meta ? `${item.title} • ${item.meta}` : item.title;
  return item.url ? `- [${detail}](${item.url})` : `- ${detail}`;
}

function formatYearlySection(
  heading: string,
  items: { year: number; title: string; meta?: string; url?: string }[]
): string[] {
  const lines = ['', `## ${heading}`, ''];

  for (const [index, item] of items.entries()) {
    if (index === 0 || items[index - 1].year !== item.year) {
      lines.push(`### ${item.year}`, '');
    }
    lines.push(formatCred(item));
  }

  return lines;
}

export const GET: APIRoute = async () => {
  const about = await getEntry('pages', 'about');
  if (!about) {
    return new Response('Not found', { status: 404 });
  }

  const lines = [
    `# ${about.data.title}`,
    '',
    about.body ?? '',
    '',
    '## Skills',
    '',
    ...SKILLS.map((skill) => `- **${skill.label}:** ${skill.items.join(', ')}`),
    '',
    '## Languages',
    '',
    `- ${LANGUAGES}`,
    ...formatYearlySection('Certifications', CERTIFICATIONS),
    ...formatYearlySection('Awards', AWARDS),
    ...formatYearlySection(
      'Speaking',
      TALKS.map((talk) => ({
        year: talk.year,
        title: talk.title,
        meta: talk.venue,
        url: talk.url,
      }))
    ),
    '',
  ];

  return new Response(lines.join('\n'));
};

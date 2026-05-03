import type { CollectionEntry } from 'astro:content';

export const DEFAULT_BLOG_LANGUAGE = 'en';

const LANGUAGE_LABELS: Record<string, string> = {
  en: 'English',
  'zh-hant': '繁體中文',
};

export type BlogEntry = CollectionEntry<'blog'>;

export interface BlogLanguageLink {
  language: string;
  label: string;
  url: string;
}

export interface BlogPostVariant {
  entry: BlogEntry;
  slug: string;
  language: string;
  label: string;
  url: string;
}

export interface BlogPageProps {
  post: BlogEntry;
  lang: string;
  languageLinks: BlogLanguageLink[];
}

function normalizeLanguage(language?: string): string {
  return (language ?? DEFAULT_BLOG_LANGUAGE).toLowerCase();
}

function getBlogSlug(entry: BlogEntry): string {
  const segments = entry.id.split('/').filter(Boolean);
  const language = normalizeLanguage(entry.data.language);
  const lastSegment = segments.at(-1);

  if (lastSegment === 'index') {
    return segments.slice(0, -1).join('/');
  }

  if (segments.length > 1 && lastSegment === language) {
    return segments.slice(0, -1).join('/');
  }

  return entry.id;
}

function getLanguageLabel(entry: BlogEntry, language: string): string {
  return entry.data.languageLabel ?? LANGUAGE_LABELS[language] ?? language.toUpperCase();
}

export function getBlogPostUrl(slug: string, language = DEFAULT_BLOG_LANGUAGE): string {
  return language === DEFAULT_BLOG_LANGUAGE ? `/blog/${slug}/` : `/blog/${slug}/${language}/`;
}

export function getBlogPostGroups(entries: BlogEntry[]): BlogPostVariant[][] {
  const groups = new Map<string, BlogPostVariant[]>();

  for (const entry of entries) {
    const language = normalizeLanguage(entry.data.language);
    const slug = getBlogSlug(entry);
    const variant: BlogPostVariant = {
      entry,
      slug,
      language,
      label: getLanguageLabel(entry, language),
      url: getBlogPostUrl(slug, language),
    };

    const existing = groups.get(slug) ?? [];
    existing.push(variant);
    groups.set(slug, existing);
  }

  return Array.from(groups.values()).map((variants) =>
    variants.sort((left, right) => {
      if (left.language === DEFAULT_BLOG_LANGUAGE) {
        return -1;
      }

      if (right.language === DEFAULT_BLOG_LANGUAGE) {
        return 1;
      }

      return left.label.localeCompare(right.label, 'en');
    })
  );
}

export function getDefaultBlogPosts(entries: BlogEntry[]): BlogPostVariant[] {
  return getBlogPostGroups(entries)
    .map((variants) => {
      return variants.find((variant) => variant.language === DEFAULT_BLOG_LANGUAGE) ?? variants[0];
    })
    .sort((left, right) => {
      return right.entry.data.pubDate.valueOf() - left.entry.data.pubDate.valueOf();
    });
}

export function getBlogStaticPaths(entries: BlogEntry[]) {
  return getBlogPostGroups(entries).flatMap((variants) => {
    const defaultVariant =
      variants.find((variant) => variant.language === DEFAULT_BLOG_LANGUAGE) ?? variants[0];

    const paths = [
      {
        params: { slug: defaultVariant.slug },
        props: buildBlogPageProps(defaultVariant, variants),
      },
    ];

    for (const variant of variants) {
      if (variant.entry.id === defaultVariant.entry.id) {
        continue;
      }

      paths.push({
        params: { slug: `${variant.slug}/${variant.language}` },
        props: buildBlogPageProps(variant, variants),
      });
    }

    return paths;
  });
}

function buildBlogPageProps(
  currentVariant: BlogPostVariant,
  variants: BlogPostVariant[]
): BlogPageProps {
  return {
    post: currentVariant.entry,
    lang: currentVariant.language,
    languageLinks: variants
      .filter((variant) => variant.entry.id !== currentVariant.entry.id)
      .map((variant) => ({
        language: variant.language,
        label: variant.label,
        url: variant.url,
      })),
  };
}

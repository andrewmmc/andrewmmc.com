import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

const BLOG_DIR = 'src/content/blog';
const PAGES_DIR = 'src/content/pages';

function extractFrontmatter(content: string): Record<string, string> {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const frontmatter: Record<string, string> = {};
  for (const line of match[1].split('\n')) {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim();
      const value = line
        .slice(colonIndex + 1)
        .trim()
        .replace(/^['"]|['"]$/g, '');
      frontmatter[key] = value;
    }
  }
  return frontmatter;
}

function getBlogPostDirs(): string[] {
  return readdirSync(BLOG_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);
}

describe('blog content validation', () => {
  const postDirs = getBlogPostDirs();

  it('should have at least one blog post', () => {
    expect(postDirs.length).toBeGreaterThan(0);
  });

  it.each(postDirs)('post "%s" should have required frontmatter', (slug: string) => {
    const filePath = join(BLOG_DIR, slug, 'index.md');
    const content = readFileSync(filePath, 'utf-8');
    const frontmatter = extractFrontmatter(content);

    expect(frontmatter.title, `${slug}: missing title`).toBeTruthy();
    expect(frontmatter.pubDate, `${slug}: missing pubDate`).toBeTruthy();
  });

  it.each(postDirs)('post "%s" should have a valid pubDate', (slug: string) => {
    const filePath = join(BLOG_DIR, slug, 'index.md');
    const content = readFileSync(filePath, 'utf-8');
    const frontmatter = extractFrontmatter(content);

    const date = new Date(frontmatter.pubDate);
    expect(date.toString(), `${slug}: invalid pubDate "${frontmatter.pubDate}"`).not.toBe(
      'Invalid Date'
    );
  });

  it.each(postDirs)('post "%s" slug should be kebab-case', (slug: string) => {
    expect(slug, `${slug}: slug should be kebab-case`).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
  });
});

describe('pages content validation', () => {
  it('should have page files with required frontmatter', () => {
    const pageFiles = readdirSync(PAGES_DIR).filter((f) => f.endsWith('.md'));
    expect(pageFiles.length).toBeGreaterThan(0);

    for (const file of pageFiles) {
      const content = readFileSync(join(PAGES_DIR, file), 'utf-8');
      const frontmatter = extractFrontmatter(content);
      expect(frontmatter.title, `${file}: missing title`).toBeTruthy();
    }
  });
});

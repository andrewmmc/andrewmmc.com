import { existsSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

function readDist(path: string): string {
  const fullPath = `dist/${path}`;
  expect(existsSync(fullPath), `${fullPath} should exist`).toBe(true);
  return readFileSync(fullPath, 'utf-8');
}

describe('RSS feed', () => {
  it('should be valid XML with required elements', () => {
    const rss = readDist('rss.xml');
    expect(rss).toContain('<?xml version="1.0"');
    expect(rss).toContain('<rss version="2.0"');
    expect(rss).toContain('<channel>');
    expect(rss).toContain('<title>Andrew Mok</title>');
    expect(rss).toContain('<description>');
    expect(rss).toContain('<link>https://andrewmmc.com/</link>');
  });

  it('should contain blog post items', () => {
    const rss = readDist('rss.xml');
    const itemCount = (rss.match(/<item>/g) || []).length;
    expect(itemCount).toBeGreaterThan(0);
  });

  it('should have required fields in each item', () => {
    const rss = readDist('rss.xml');
    const items = rss.split('<item>').slice(1);
    for (const item of items) {
      expect(item).toContain('<title>');
      expect(item).toContain('<link>');
      expect(item).toContain('<pubDate>');
    }
  });
});

describe('sitemap', () => {
  it('should have a sitemap index', () => {
    const sitemap = readDist('sitemap-index.xml');
    expect(sitemap).toContain('<?xml');
    expect(sitemap).toContain('sitemap');
  });

  it('should have a sitemap with URLs', () => {
    const sitemap = readDist('sitemap-0.xml');
    expect(sitemap).toContain('https://andrewmmc.com');
    expect(sitemap).toContain('<loc>');
  });
});

describe('HTML pages meta tags', () => {
  it('homepage should have correct meta tags', () => {
    const html = readDist('index.html');
    expect(html).toContain('<title>Andrew Mok</title>');
    expect(html).toContain('name="description"');
    expect(html).toContain('property="og:type"');
    expect(html).toContain('property="og:title"');
    expect(html).toContain('property="og:description"');
    expect(html).toContain('rel="canonical"');
    expect(html).toContain('application/ld+json');
  });

  it('about page should have correct title', () => {
    const html = readDist('about/index.html');
    expect(html).toContain('<title>');
    expect(html).toContain('Andrew Mok');
    expect(html).toContain('name="description"');
    expect(html).toContain('rel="canonical"');
  });

  it('about page should keep the title and bio, with tables for credentials', () => {
    const html = readDist('about/index.html');
    expect(html).toContain('text-title');
    expect(html).toContain('>About<');
    expect(html).toContain('Feel free to');
    expect(html).toContain('mailto:hello@andrewmmc.com');
    expect(html).toContain('<table');
    expect(html).toContain('id="skills-heading"');
    expect(html).toContain('id="languages-heading"');
    expect(html).toContain('id="certifications-heading"');
    expect(html).toContain('id="awards-heading"');
    expect(html).toContain('id="speaking-heading"');
    expect(html).toContain('Professional Scrum Master I');
    expect(html).toContain('Show Me The Code Meetup #9');
    expect(html).toContain('Web Accessibility');
  });

  it('about markdown endpoint should include structured sections', () => {
    const markdown = readDist('about.md');
    expect(markdown).toContain('# About');
    expect(markdown).toContain('## Skills');
    expect(markdown).toContain('## Certifications');
    expect(markdown).toContain('Professional Scrum Master I');
  });

  it('blog redirect should point to homepage', () => {
    const html = readDist('blog/index.html');
    expect(html).toContain('<title>Redirecting to: /</title>');
    expect(html).toContain('content="0;url=/"');
    expect(html).toContain('name="robots" content="noindex"');
    expect(html).toContain('rel="canonical" href="https://andrewmmc.com/"');
  });

  it('blog post should have article meta tags', () => {
    const html = readDist('blog/switching-to-microsoft-edge/index.html');
    expect(html).toContain('<title>Switching to Microsoft Edge');
    expect(html).toContain('property="og:type" content="article"');
    expect(html).toContain('application/ld+json');
    expect(html).toContain('BlogPosting');
    expect(html).toContain('rel="canonical"');
  });

  it('404 page should exist and have content', () => {
    const html = readDist('404.html');
    expect(html).toContain('<title>');
    expect(html.length).toBeGreaterThan(100);
  });

  it('all pages should have RSS link', () => {
    const pages = ['index.html', 'about/index.html'];
    for (const page of pages) {
      const html = readDist(page);
      expect(html, `${page} should have RSS link`).toContain('application/rss+xml');
    }
  });
});

describe('header navigation', () => {
  it('should render a circular home mark labeled with the site title', () => {
    const html = readDist('index.html');
    const header = html.match(/<header[\s\S]*?<\/header>/)?.[0];

    expect(header).toBeDefined();
    expect(header).toContain('aria-label="Andrew Mok"');
    expect(header).toContain('rounded-full');
    expect(header).toMatch(/>\s*A\s*<\/a>/);
    expect(header).not.toMatch(/>\s*Andrew Mok\s*</);
  });

  it('should render icon links with accessible labels', () => {
    const html = readDist('index.html');

    expect(html).toContain('aria-label="Main navigation"');
    expect(html).toContain('aria-label="Writing"');
    expect(html).toContain('aria-label="About"');
    expect(html).toContain('aria-label="Projects (opens in a new tab)"');
    expect(html).toContain('aria-current="page"');
    expect(html).toMatch(/<nav[^>]*>[\s\S]*<svg[\s\S]*<\/nav>/);
    expect(html).not.toMatch(/<nav[^>]*>[\s\S]*>Writing<\/a>/);
  });
});

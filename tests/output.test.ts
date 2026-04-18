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

  it('blog index should have correct meta tags', () => {
    const html = readDist('blog/index.html');
    expect(html).toContain('<title>');
    expect(html).toContain('name="description"');
    expect(html).toContain('rel="canonical"');
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
    const pages = ['index.html', 'about/index.html', 'blog/index.html'];
    for (const page of pages) {
      const html = readDist(page);
      expect(html, `${page} should have RSS link`).toContain('application/rss+xml');
    }
  });
});

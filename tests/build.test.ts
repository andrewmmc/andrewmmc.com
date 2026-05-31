import { execSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

describe('build smoke test', () => {
  it('should complete successfully', () => {
    expect(() => {
      execSync('npm run build', { cwd: process.cwd(), stdio: 'pipe' });
    }).not.toThrow();
  }, 60_000);

  it('should produce dist directory with key pages', () => {
    const requiredFiles = [
      'dist/index.html',
      'dist/404.html',
      'dist/about/index.html',
      'dist/blog/switching-to-microsoft-edge/index.html',
      'dist/rss.xml',
      'dist/sitemap-index.xml',
    ];

    for (const file of requiredFiles) {
      expect(existsSync(file), `${file} should exist`).toBe(true);
    }
  });
});

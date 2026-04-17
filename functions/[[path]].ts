interface Env {
  ASSETS: {
    fetch(request: Request): Promise<Response>;
  };
}

interface EventContext {
  request: Request;
  env: Env;
  next(): Promise<Response>;
}

function wantsMarkdown(request: Request): boolean {
  const accept = request.headers.get('accept') ?? '';
  return accept.toLowerCase().includes('text/markdown');
}

function toMarkdownPath(pathname: string): string {
  if (pathname === '/') return '/index.md';
  const normalized = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  return `${normalized}.md`;
}

function estimateTokens(text: string): number {
  return Math.ceil(text.length / 4);
}

export async function onRequest(context: EventContext): Promise<Response> {
  if (!wantsMarkdown(context.request)) {
    return context.next();
  }

  const url = new URL(context.request.url);
  url.pathname = toMarkdownPath(url.pathname);

  const assetResponse = await context.env.ASSETS.fetch(
    new Request(url.toString(), context.request)
  );

  if (!assetResponse.ok) {
    return context.next();
  }

  const markdown = await assetResponse.text();
  const headers = new Headers(assetResponse.headers);
  headers.set('content-type', 'text/markdown; charset=utf-8');
  headers.set('x-markdown-tokens', String(estimateTokens(markdown)));
  headers.set('vary', 'Accept');

  return new Response(markdown, {
    status: 200,
    headers,
  });
}

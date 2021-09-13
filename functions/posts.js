const Parser = require('rss-parser');

exports.handler = async function getPosts() {
  const parser = new Parser();
  try {
    const feed = await parser.parseURL('https://medium.com/feed/@andrewmmc');
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: feed.title,
        items: feed.items,
      }),
    };
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ err: 'Internal server error' }),
    };
  }
};

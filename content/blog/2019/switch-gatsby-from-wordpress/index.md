---
templateKey: 'blog-post'
title: Switching from Wordpress to GatsbyJS
date: '2019-02-09T16:00:00+08:00'
canonical: 'https://medium.com/thepolarlab/switching-from-wordpress-to-gatsbyjs-168d25a99cd3'
---

Recently, I revamped [my personal website](https://andrewmmc.com) by using [GatsbyJS](https://www.gatsbyjs.org) during the Lunar New Year. 

Originally I was using [Wordpress](https://wordpress.org), a powerful but old-school blogging tool for my portfolio and blog. It is easy to set up on a PHP-MySQL environment, but it is not so developers friendly with their WYSIWYG editor provided. 

Though I decided to spend some time to take a look to see if there are any better blogging tools for me:
* Markdown friendly - so I don't need to focus on styling
* Easy to set up and publish
* Easy to export contents with minimum efforts

Another thing is I would like to have an easy-to-use and developers friendly blogging system to let me share more about my experiences when trying something new. Not only I can easily to log what I learn, but I would also like to make it easier to be shared as well.

## Choices in the market

There are serval choices in the market which can fulfill my requirement above:
* [Medium](https://medium.com)
* [Hexos](https://hexo.io) (Node.js)
* [Hugo](https://gohugo.io) (Golang)
* [GatsbyJS](https://www.gatsbyjs.org) (React)

Medium is a good choice if you don't want to host your website by yourself. I have [a blog on Medium](https://medium.com/@andrewmmc) too, it has a large community so your articles could be easy to be searched and viewed on their website. However, it provides a very lack of customizing options. Hexos, Hugo and GatsbyJS are both popular choices for blogging recently. It provides good documentation with large community support. 

## Why GatsbyJS?

Finally, I picked [GatsbyJS](https://www.gatsbyjs.org) because:
* Built-in [React](https://reactjs.org) and [GraphQL](https://graphql.org), both are frontend-developers friendly
* [No-backend](http://nobackend.org), pages are generated during build time with GraphQL
* Everything is JavaScript (no need to learn another templating language)
* Good documentation with community support, less complexity at beginning
* [JAMstack approach](https://jamstack.org) to build modern static website
* Single page application, support PWA as well (optional)

If you are already familiar with React, GatsbyJS is very easy to pick up by following their [tutorials](https://www.gatsbyjs.org/tutorial). Everything is built in React components with GraphQL queries as your data sources. [Gatsby-starter-blog](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog) is a good starting point to provide what you needed to have a basic blogging system. Also, you can install different plugins from both React and GatsbyJS communities, or even write your own one to fulfil your needs.

## Migrating data from Wordpress

You can consider directly using Wordpress API as your [datasource](https://www.gatsbyjs.org/packages/gatsby-source-wordpress), but personally, I would prefer to convert my existing data in markdown format because it makes me easy to export to somewhere. I don't have much data on my old website so I migrate them one by one, but you can still consider [different exporters](https://github.com/dreikanter/wp2md) to export them into markdown format.

## Hosting

Originally I was hosting my Wordpress on my personal server. I need to put some efforts to take care of setting up my own server with databases in the previous time. 

As [GatsbyJS](https://www.gatsbyjs.org) is a static website generator, that means I can directly move my website to some popular static hosting options without care about backend/DevOps stuff. [GitHub Pages](https://pages.github.com) and [Netlify](https://www.netlify.com) are the good choices with a free plan, and I chose Netlify as it is more stable and reliable in Mainland China. Also, it provided more functionally such as assets optimization and 1-click rollbacks. You can simply to set up minoring from GitHub repository so it will automatically be deployed once you pushed your updates to your `master` branch.

## What's next?

I will still keep posting in my Medium blog but I will put more focus on [my personal website](https://andrewmmc.com) from now on. 

There are several points that I met when I trying to revamp my website using GatsbyJS. It is a powerful tool with serval benefits once you are familiar with it. I will share more about it in my next article. Stay tuned :)

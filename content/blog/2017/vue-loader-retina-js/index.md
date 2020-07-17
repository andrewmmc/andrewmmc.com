---
templateKey: 'blog-post'
title: Using Retina.js with Vue-loader
date: '2017-05-09T00:00:00.000Z'
canonical: 'https://medium.com/thepolarlab/using-retina-js-with-vue-loader-ce44a965c258'
---

Vue-loader is a loader for webpack to handle Vue's component. By default, it will handle the file paths stated in src only.

As url-loader and file-loader do not know @2x and @3x file paths, production files will be packed without @2x and @3x files. Therefore, retina.js cannot found @2x and @3x files for retina images replacement.

By the following way, you can serve your @2x images and let Vue-loader recognize them:

1. Add data-rjs in <img> tag for @2x file path in the template part of Vue components.

2. Edit `build/vue-loader.conf.js`, and add the following:

```
transformToRequire: { img: ['src', 'data-rjs'], image: 'xlink:href' }
```

**Now Vue-loader will require data-rjs files, and makes url-loader and file-loader to pack those files into production build.**

References:
* [Vue-loader Options Reference](https://vue-loader.vuejs.org/en/options.html)
* [Retinajs Readme](https://github.com/jgnewman/retinajs)

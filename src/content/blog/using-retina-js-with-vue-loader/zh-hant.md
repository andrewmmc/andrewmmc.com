---
title: 在 Vue-loader 中使用 Retina.js
pubDate: '2017-05-09T03:37:39.000Z'
author: Andrew Mok
description: 讓 Vue 也能正確提供 retina 圖片
language: zh-hant
languageLabel: Traditional Chinese
---

#### 讓 Vue 也能正確提供 retina 圖片

![](./1*UnGBu0SOgC7S5b578L87-w.webp)

> **2020 更新：**你也可以考慮使用原生支援的 `srcset` 與 `picture/source` 來處理 retina 圖片。[這份文件有相關範例。](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

`vue-loader` 是 `webpack` 用來處理 Vue component 的 loader。預設情況下，它只會處理寫在 `src` 中的檔案路徑。

由於 `url-loader` 與 `file-loader` 並不知道 `@2x` 和 `@3x` 這些檔案路徑，production build 時通常不會把 `@2x` 和 `@3x` 檔案一併打包。因此，`retina.js` 就找不到用來替換 retina 圖片的 @2x 與 @3x 檔案。

你可以用以下方式把 `@2x` 圖片提供出去，並讓 Vue-loader 正確辨識它們：

1. 在 Vue component 的 template 中，於 `img` 標籤加入 `data-rjs` 來指定 `@2x` 的檔案路徑。
2. 編輯 `build/vue-loader.conf.js`，加入以下內容：

```
transformToRequire: { img: ['src', 'data-rjs'], image: 'xlink:href' }
```

**這樣一來，Vue-loader 就會把 `data-rjs` 也視為需要處理的檔案，並讓 `url-loader` 與 `file-loader` 在 production build 時一併打包這些資源。**

---

參考資料：

- [Vue-loader Options Reference](https://vue-loader.vuejs.org/en/options.html)
- [Retinajs Readme](https://github.com/jgnewman/retinajs)

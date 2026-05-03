---
title: 從 Wordpress 轉到 GatsbyJS
pubDate: '2019-02-09T09:17:08.516Z'
author: Andrew Mok
description: 最近我在農曆新年期間用 GatsbyJS 重整了自己的個人網站。
language: zh-hant
languageLabel: Traditional Chinese
---

![](./1*6P_pY-3lVHtvn2h_7ydWRg.webp)

最近我趁著農曆新年，用 [GatsbyJS](https://www.gatsbyjs.org) 重整了[自己的個人網站](https://andrewmmc.com)。

原本我的作品集與部落格是使用 [Wordpress](https://wordpress.org)。它是一套功能很強但也較為老派的部落格工具，放在 PHP-MySQL 環境中很容易架設。不過，它提供的 WYSIWYG 編輯器對開發者來說就沒有那麼友善。

於是我決定花點時間看看，是否有更適合自己的寫作工具：

- 對 Markdown 友善，讓我不用太專注於排版
- 容易架設與發佈
- 能以較低成本匯出內容

另一個考量是，我希望擁有一套易用而且更適合開發者的部落格系統，好讓我分享更多自己在學習與嘗試新事物時的經驗。不僅能方便記錄所學，也希望文章更容易被分享出去。

### 市面上的選擇

市面上其實有不少選擇可以符合以上需求：

- [Medium](https://medium.com)
- [Hexos](https://hexo.io)（Node.js）
- [Hugo](https://gohugo.io)（Golang）
- [GatsbyJS](https://www.gatsbyjs.org)（React）

如果你不想自己託管網站，Medium 會是一個不錯的選擇。我自己也有一個 [Medium blog](https://medium.com/@andrewmmc)，那裡有龐大的社群，所以文章比較容易被搜尋到，也比較容易被讀者看見。不過，它可自訂的空間相對有限。Hexos、Hugo 與 GatsbyJS 則是近年很受歡迎的部落格方案，都有不錯的文件與社群支援。

### 為什麼選 GatsbyJS？

最後，我選擇了 [GatsbyJS](https://www.gatsbyjs.org)，原因包括：

- 內建 [React](https://reactjs.org) 與 [GraphQL](https://graphql.org)，對前端開發者相當友善
- [No-backend](http://nobackend.org)，頁面會在 build time 透過 GraphQL 產生
- 一切都是 JavaScript（不用再學另一套模板語言）
- 文件完整、社群支援好，入門複雜度較低
- 採用 [JAMstack](https://jamstack.org) 方式建立現代化靜態網站
- 可做成 single page application，也支援 PWA（選配）

如果你本來就熟悉 React，照著他們的 [tutorials](https://www.gatsbyjs.org/tutorial) 很快就能上手 GatsbyJS。所有內容都建立在 React components 上，再透過 GraphQL queries 作為資料來源。[Gatsby-starter-blog](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog) 就是一個很好的起點，可以很快提供一個基本部落格系統。除此之外，你也可以從 React 與 GatsbyJS 的社群安裝不同 plugins，甚至自行撰寫 plugin 來滿足需求。

### 從 Wordpress 遷移資料

你可以考慮直接把 Wordpress API 當成 [datasource](https://www.gatsbyjs.org/packages/gatsby-source-wordpress)，但我個人更傾向把既有內容轉成 markdown，因為這樣將來要搬去其他地方會更容易。我舊網站上的資料不算多，所以我是逐篇手動轉移；如果資料量較大，也可以考慮使用一些[匯出工具](https://github.com/dreikanter/wp2md)把文章轉成 markdown。

### Hosting

原本我的 Wordpress 是架設在自己的個人伺服器上，因此以前需要花不少時間處理伺服器與資料庫設定。

而 [GatsbyJS](https://www.gatsbyjs.org) 是靜態網站產生器，也就是說，我可以把網站直接搬到一些流行的靜態託管服務，而不用太擔心 backend 或 DevOps 問題。[GitHub Pages](https://pages.github.com) 與 [Netlify](https://www.netlify.com) 都是不錯的免費選擇，而我最後選了 Netlify，因為它在中國大陸相對更穩定可靠，還提供資產最佳化與一鍵 rollback 等功能。你只需要把它連接到 GitHub repository，當你把更新推送到 `master` branch 時，它就會自動部署。

### 下一步？

我仍然會繼續在 Medium 上寫文章，但之後我會把更多重心放在[自己的個人網站](https://andrewmmc.com)上。

在這次用 GatsbyJS 重整網站的過程中，我遇到了幾個值得記下來的點。它是一個很強大的工具，只要熟悉之後就能感受到不少優勢。我會在下一篇文章分享更多相關內容，敬請期待 :)

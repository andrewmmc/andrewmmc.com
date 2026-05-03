---
title: 'Node.js 錯誤：getaddrinfo ENOTFOUND localhost'
pubDate: '2017-05-16T06:26:03.000Z'
author: Andrew Mok
description: getaddrinfo ENOTFOUND localhost 錯誤通常是因為 Webpack 找不到 localhost 位址。
language: zh-hant
languageLabel: Traditional Chinese
---

![](./1*Gjsy55CGGCtodOU_Bc-3Zg.webp)

`getaddrinfo ENOTFOUND localhost` 這個錯誤，通常是因為 Webpack 找不到 `localhost` 位址。

要解決這個問題，先打開終端機：

1. `sudo nano /etc/hosts`
2. 在 hosts 檔案加入以下內容並儲存。

```
127.0.0.1 localhost
```

---

參考資料：

- [解决node运行时getaddrinfo ENOTFOUND localhost错误](http://blog.leanote.com/post/freemem/%E8%A7%A3%E5%86%B3node%E8%BF%90%E8%A1%8C%E6%97%B6getaddrinfo-ENOTFOUND-localhost%E9%94%99%E8%AF%AF)

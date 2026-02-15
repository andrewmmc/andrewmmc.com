---
title: 'Node.js error: getaddrinfo ENOTFOUND localhost'
pubDate: '2017-05-16T06:26:03.000Z'
author: Andrew Mok
description: The error getaddrinfo ENOTFOUND localhost is caused by Webpack cannot found localhost address.
---

![](./1*Gjsy55CGGCtodOU_Bc-3Zg.webp)

The error `getaddrinfo ENOTFOUND localhost` is caused by Webpack cannot found `localhost` address.

To solve it, open the terminal:

1. `sudo nano /etc/hosts`
2. Add following into the hosts file and save it.

```
127.0.0.1 localhost
```

---

References:

- [解决node运行时getaddrinfo ENOTFOUND localhost错误](http://blog.leanote.com/post/freemem/%E8%A7%A3%E5%86%B3node%E8%BF%90%E8%A1%8C%E6%97%B6getaddrinfo-ENOTFOUND-localhost%E9%94%99%E8%AF%AF)

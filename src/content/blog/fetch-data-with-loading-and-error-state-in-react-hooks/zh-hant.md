---
title: 在 React Hooks 中取得資料並處理 loading 與 error state
pubDate: '2020-03-01T08:38:52.827Z'
author: Andrew Mok
description: 我在目前的專案中已使用 React hooks 數個月。它是一個很強大的 API，而我想分享一些可在應用程式中重用的技巧。
language: zh-hant
languageLabel: Traditional Chinese
---

![](./1*pzKp6UMioZVCXlhZRebzHQ.webp)

我在目前參與的專案中已使用 React hooks 好幾個月。這是一組相當強大的 API，而我想分享一些可在應用程式中重複使用的技巧。

### 資料取得

其中一個常見的使用情境，是在 component mounted 時從 API 取得資料。初始 state 是空的，而你會希望在資料成功取回後把它寫進 state。

這樣看起來好像沒問題，但實際上有什麼隱患？這裡其實有一些 bug：

- 在 component unmounted 之後，資料仍可能被寫入 state，導致 memory leak。

我們可以在 effect 裡加入一個區域變數 `ignore` 來解決這個問題。

當 component unmounted 時，`ignore` 會被設為 true，以避免把已取回的資料寫回 store。

### Loading 與 error state

大部分情況下，當我們從 API 取得資料時，都需要顯示 loading indicator 讓使用者知道系統正在處理。同時，也需要處理錯誤狀態，以提升最終使用者的體驗。所以要怎樣做？你可以額外加入兩個 state 來處理它們：

是的，我們可以看到這樣確實可行，但程式碼也開始變得凌亂——光是處理 loading、error 和 data fetching，就用了超過 15 行。如果同一頁上不只一個 API 需要取得資料，又會怎樣？

其實，我們可以把這段邏輯封裝成一個自訂 hook，方便重用，例如這樣：

而在實際的業務邏輯中，我們就可以直接使用自訂 hook `useRequest`：

你應該能感受到 React Hooks 有多強大吧？如果你懶得自己寫自訂 hooks，也有一些 hook library 已經把大部分常見場景都處理好了，值得看看，也許可以替你省下不少時間。

- [@umijs/hooks](https://hooks.umijs.org)

如果你想進一步學習 React Hooks，以下也有幾篇值得閱讀的文章：

- [A Complete Guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/)
- [React Hooks FAQ](https://reactjs.org/docs/hooks-faq.html)
- [How to fetch data with React Hooks?](https://www.robinwieruch.de/react-hooks-fetch-data)

---
title: Fetch data with loading and error state in React Hooks
pubDate: '2020-03-01T08:38:52.827Z'
author: Andrew Mok
description: I am using React hooks with the current project that I am working on for a few months. It’s a powerful API, and I would like to show you…
---

![](./1*pzKp6UMioZVCXlhZRebzHQ.webp)

I am using React hooks on the current project that I am working on for a few months. It’s a powerful API, and I would like to show you some useful skills that can be reused in your application.

### Data fetching

One common use case is fetching the data from API when mounted. The initial state is empty and you would like to set data to your state when fetched.

It looks fine, but what are the issues here? There are some bugs:

- Data will be still being set to state when the component unmounted, causing a memory leak.

We can solve it by adding local variable `ignore` inside the effect.

When the component is unmounted, `ignore` will be set to true to avoid setting fetched data to store.

### Loading and error state

In most of our time, when we are fetching data from the API, we need to display the loading indicator to notify users. Also, we need to handle the error as well to improve the user experience for the end-users. So what should you do? You may add two more states to handle that:

Ya, we can see it works, but we start seeing the code is becoming messy — used more than 15 lines code to handle loading, error, and data fetching. What if we have more than one API need to be fetched on the page?

Actually, we can pack our code as a custom hook for reusing it, like this:

And we can simply use our custom hook `useRequest` in our business logic:

You can see how powerful is React Hooks, right? If you’re too lazy to write your custom hooks, there are serval hooks libraries that covered most of the cases, and it’s worth to take a look as it may save your time without writing it by yourself.

- [@umijs/hooks](https://hooks.umijs.org)

There are some articles worth to read for learning how to use React Hooks, you may check them out too -

- [A Complete Guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/)
- [React Hooks FAQ](https://reactjs.org/docs/hooks-faq.html)
- [How to fetch data with React Hooks?](https://www.robinwieruch.de/react-hooks-fetch-data)

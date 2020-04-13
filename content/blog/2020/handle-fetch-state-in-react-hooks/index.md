---
title: Fetch data with loading and error state in React Hooks
date: '2020-03-01T16:00:00+08:00'
canonical: 'https://medium.com/andrewmmc-io/fetch-data-with-loading-and-error-state-in-react-hooks-a341706a6ffe'
---

I am using React hooks with the current project that I am working on for a few months. It's a powerful API, and I would like to show you some useful skills that can be reused in your application.

## Data fetching

One common use case is you would like to fetch the data from API when mounted. The initial state is empty and you would like to set data to your state when fetched.

```jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState({});
  const { productId } = useParams(); // or from somewhere

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios(`http://myapi/product/${productId}`);
      setData(response.data);
    };
    fetchProduct();
  }, [productId]);

  return ...;
};

export default App;
```

It looks fine, but what are the issues here? There are some bugs:

* Data will be still being set to state when the component unmounted, causing a memory leak.

We can solve it by adding local variable `ignore` inside the effect.

```jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState({});
  const { productId } = useParams(); // or from somewhere

  useEffect(() => {
    let ignore = false;
    const fetchProduct = async () => {
      const response = await axios(`http://myapi/product/${productId}`);
      if (!ignore) setData(response.data);
    };
    fetchProduct();
    return (() => { ignore = true; });
  }, [productId]);

  return ...;
};

export default App;
```

When the component is unmounted, `ignore` will be set to true to avoid setting fetched data to store.

## Loading and error state

In most of our time, when we are fetching data from the API, we need to display the loading indicator to notify users. Also, we need to handle the error as well to improve the user experience for the end-users. So what should you do? You may add two more states to handle that:

```jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const { productId } = useParams(); // or from somewhere

  useEffect(() => {
    let ignore = false;
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError({});
        const response = await axios(`http://myapi/product/${productId}`);
        if (!ignore) setData(response.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchProduct();
    return (() => { ignore = true; });
  }, [productId]);

  return ...;
};

export default App;
```

Ya, we can see it works, but we start seeing the code is becoming messy - used more than 15 lines code to handle loading, error, and data fetching. What if we have more than one API need to be fetched on the page?

Actually, we can pack our code as a custom hook for reusing it, like this: 

```jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useRequest = (initUrl) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  useEffect(() => {
    let ignore = false;
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios(initUrl);
        if (!ignore) setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
    return (() => { ignore = true; });
  }, [initUrl]);

  return { data, loading, error };
};

export default useRequest;
```

And we can simply use `useRequest` in our business logic:

```jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const App = () => {
  const { productId } = useParams(); // or from somewhere
  const { data, loading, error } = useRequest(`http://myapi/product/${productId}`);

  return ...;
};

export default App;
```

You can see how React Hooks is powerful, right? If you're too lazy to write your custom hooks, there are serval hooks library that covered most of the cases, and it's worth to take a look as it may save your time to write it by yourself.

* [@umijs/hooks](https://hooks.umijs.org)

There are some articles worth to read for learning how to use React Hooks, you may check it out - 

* [A Complete Guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/)
* [React Hooks FAQ](https://reactjs.org/docs/hooks-faq.html)
* [How to fetch data with React Hooks?](https://www.robinwieruch.de/react-hooks-fetch-data)

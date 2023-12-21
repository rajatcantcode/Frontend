## How to integrate API in React JS

api for free -> https://fakestoreapi.com/

To install axios

```bash
npm i axios
```

We need a connection between the backend and frontend -> Ajax - Solution - Aysnchorounous Javascript and XML
Ajax is a concept - implemented by Fetch (JS Core Feature) or Axios (3rd party Pckg to install)\* Recommended

```jsx
import axios from "axios";

const getproducts = () => {
  const api = "https://fakestoreapi.com/products";
  // with help of 'get' method we would be acess the api and access products one by one
  axios
    .get(api)
    .then((products) => {
      console.log(products);
    })
    // if somehow we would't be able to access the products this will show us the error
    .catch((error) => {
      console.log(error);
    });
};
```

Add a new product in API

```jsx
// note : API don't add in real DB you just need to check the id number of the added product API i.e.. 21
const addProducts = () => {
  const api = "https://fakestoreapi.com/products";
  axios
    .post(api, {
      //changes here just post and added a new product
      title: "test product",
      price: 13.5,
      description: "lorem ipsum set",
      image: "https://i.pravatar.cc",
      category: "electronic",
    })
    .then((products) => {
      console.log(products);
    })
    .catch((error) => {
      console.log(error);
    });
};
```

Now we want the API to display on the screen when the users visits like in myntra clothes are shown via API

useEffect -> There is an issue objects are displaying only when we are clicking but we want it to be display at the very first user visits the website

This issue is solved by useEffect

There are 3 lifecycle Methods are must be in a React component  
->Component Mount (mount means creation)  
->Component Update - when useState is changed or changes in view ❌
->Component Unmount(unmount means deletion)

These are very basic topics

useeffects -> It's a implementation of our lifecycle methods provided by React and called by React - When ? Component creation, Component update, Component deletion

### when component created

```jsx
import React from "react";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    console.log("Service component is Created!");
  });
  return <div>About</div>;
}
```

This is getting printed in console

```javascript
Service component is Created!
```

### when component deleted

```jsx
//just do these changes
useEffect(() => {
  console.log("Service component is Created!");
  return () => {
    console.log("Service component is Destroyed!");
  };
});
```

### when component updated

We created one button and one text. We changed the text using useState and pressed the button in the About file, where the useEffect code was running for creation and destruction.

```js
Service component is Destroyed!
Service component is Created
```

But we have't changed the component then why it's showing because it is re-rendering the whole page instead of just updating the specified text

### Why it is re-rendering after all this is react?

Becauee After clicking on button -> our state was changed -> we can see the changes on the text/view - This is nothing but Component update(when useState is changed or changes in view)

## We should say

### ->Component Update - component deletion + component creation

## Is there any way we could stop this re-rendering?

```jsx
useEffect(() => {
  console.log("Service component is Created!");
  return () => {
    console.log("Service component is Destroyed!");
  };
}, []); //<--Just by adding [] we could stop the re-rendering
```

And now we want that like if the form gets submit then do re-render

```jsx
useEffect(() => {
  console.log("Service component is Created!");
  return () => {
    console.log("Service component is Destroyed!");
  };
}, [value2]); //<--value2 will get re-render
```

We learnt all this because we when we click on 'show' section we want api to load by itself

---

---

---

---

---

We could observe that in each component we most probably will be needed API that means we will be importing axios in every file also and they are not related to each other  
**Example:** Instagram ask for log in and then only we could use the account like for chats , to check feed  
Then **HOW?** ig/feed ig/chats now allow us to enter unless we log in

**Solution:** We need to make a conection between feed-chats-log-in to synchornous our tokens , authentication keys

-> We will create a new file and put axios there and share that file with other components
Utils > Axios.jsx >

```jsx
import axios from "axios";
const instance = axios.create({
  baseURL: "https://fakestoreapi.com",
});
export default instance;
```

in `show` component we will do like this

```jsx
import axios from "../Utils/axios";
const api = "/products";
```

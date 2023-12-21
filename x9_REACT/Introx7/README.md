## Routing & Dynamic Routing

#### To download packages

Terminal-> Write these command

```bash
npm i react-router-dom
```

#### how to check?

package.json -> dependecies

```json
"dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.21.0"<---
  },
```

## Now we need to implement in our application

main.jsx ->

```jsx
import { BrowserRouter } from "react-router-dom"; //<--make sure to import this

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

Routing is being applied but will look like noc hanges are been shown

---

Components -> Created "Home" Component  
We have App and Home .jsx files

```jsx
import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <Link to="/home">Homepage</Link>
      </nav>
    </>
  );
}

export default App;
```

Now our page won't get refresh after clicking on Homepage text due to 'link' tag
But note currently it's not getting us there at home.jsx just URL mein farak aarha hain  
http://localhost:5173/home <-- We can see

Now we know how to successfully change the URL but Problem WE ARE GETTING WE COULD NOT GETTING SHOWN THE CONTENT like myntra website clicking on men we should be shown only men's wearable
Note: At one time only one component(men's wear) will be shown

There is a tag which provided by React Router DOM known as Routes
We created more 2 files Home.jsx About.jsx User.jsx

```jsx
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import User from "./Components/User";
import About from "./Components/About";

<Routes>
  <Route path="/Home" element={<Home />} />
  <Route path="/User" element={<User />} />
  <Route path="/About" element={<About />} />
</Routes>;
```

need to add this also in app.jsx now we could see after clicking on text we are being directly routed to the particular file

We also created a new folder for to clean the main app file -> utils, we usually do add boiler plate code in this folder like axios, ajax , backend api ko kaise connect karte hain

we want to highlight the home in navbar

```jsx
import { Link, NavLink } from "react-router-dom";
<NavLink
  style={(element) => {
    return {
      color: element.isActive ? "red" : "",
      fontWeight: element.isActive ? "bold" : "",
    };
  }}
  to="/Home"
>
  Home
</NavLink>;
```

Note we could also use the className like this

```jsx
<NavLink
  className={(e) => {
    return [
      e.isActive ? "text-green-600" : "",
      e.isActive ? "font-extrabold" : "",
    ].join(" ");
  }}
  to="/User"
>
  User
</NavLink>
```

There is also one more way

```jsx
<NavLink to="/About">
  {(e) => {
    return (
      <span
        className={[
          e.isActive ? "text-blue-600" : "",
          e.isActive ? "font-extrabold" : "",
        ].join(" ")}
      >
        About
      </span>
    );
  }}
</NavLink>
```

There is a thing called useParams This will help us to get parent's view in child view
About -> John : yeh jo naam hain yeh humme milega -> UserDetails wale section mein

```jsx
// users
<Link
  to="/User/John" //<--yeh wala naam nikal tha hain useParam
  className="px-4 py-1 bg-red-300 rounded-lg text-sm hover:bg-red-500 hover:text-white"
>
  John
</Link>
```

```jsx
//User Details
import { useParams } from "react-router-dom";

const { name } = useParams(); //seedha useParams use karo
<h1>Hey {name}</h1>;
```

There is a thing called useNavigate This helps us to get back to parent's view through child view

```jsx
const navigate = useNavigate();
const GoBackHandler = () => {
  navigate("/user");
  // or we could also use this
  navigate(-1);
};
//on Button
onClick = { GoBackHandler };
```

We could display the users right bottom to them just by doing changes like this

```jsx
//@routing
<Route path="/User" element={<User />}>
  <Route path="/User/:name" element={<UserDetails />} />
</Route>
```

```jsx
import { Outlet } from "react-router-dom";
//right down where we want it to show
<Outlet />;
```

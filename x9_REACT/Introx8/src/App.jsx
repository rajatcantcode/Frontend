import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Show from "./Components/Show";

function App() {
  // no need for this for just for to know how to add prodcut in api
  // function addbutton() {
  //   //Adding a new product in the API reference API DOCS
  //   // note : API don't add in  API/JSON you just need to check the id number of the added product API i.e.. 21
  //   // const addProducts = () => {
  //   //   const api = "https://fakestoreapi.com/products";
  //   //   // with help of 'get' method we would be acess the api and access products one by one
  //   //   axios
  //   //     .post(api, {
  //   //       title: "test product",
  //   //       price: 13.5,
  //   //       description: "lorem ipsum set",
  //   //       image: "https://i.pravatar.cc",
  //   //       category: "electronic",
  //   //     })
  //   //     .then((products) => {
  //   //       console.log(products);
  //   //     })
  //   //     // if somehow we would't be able to access the products this will show us the error
  //   //     .catch((error) => {
  //   //       console.log(error);
  //   //     });
  //   // };
  //   // {/*
  //   // JSX
  //   //       <button
  //   //         onClick={addProducts}
  //   //         className="p-2 bg-green-300 mt-10 rounded-lg text-white"
  //   //       >
  //   //         Add a new Product
  //   //       </button>
  //   //       <br></br> */}
  // }

  return (
    <>
      <div className="p-10 flex flex-col items-center justify-around gap-10">
        <nav className="w-full flex items-center justify-evenly">
          <Link to="/Home">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Show">Show</Link>
        </nav>

        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Show" element={<Show />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

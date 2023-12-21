import React from "react";
import { useState } from "react";
import axios from "../Utils/axios";
import { useEffect } from "react";


function Show() {
  // WE JUST COPIED so much copied laziness
  const [product, setProducts] = useState([]);

  const getProducts = () => {
    const api = "/products";
    // with help of 'get' method we would be acess the api and access products one by one
    axios
      .get(api)
      .then((products) => {
        setProducts(products.data);
      })
      // if somehow we would't be able to access the products this will show us the error
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      {/* <button
        onClick={getProducts}
        className="p-2 bg-blue-300 rounded-lg text-white"
      >
        Call Product API
      </button> */}
      <br></br>

      {product.length > 0 ? (
        product.map((item) => (
          <div
            key={item.id}
            className="bg-zinc-400 rounded-xl p-2 text-white font-mono mt-10"
          >
            <h1 className="text-sm font-extrabold text-white">{item.title}</h1>
            <h2 className="text-xs w-full">{item.description}</h2>
          </div>
        ))
      ) : (
        <h1>Loading....</h1>
      )}
    </div>
  );
}

export default Show;

import React from "react";
import style from "./style.module.css";

function Navbar({ data }) {
  return (
    <>
      <div className="w-full px-12 py-2 bg-zinc-300 flex justify-between items-center mt-10">
        <h3 className={[`${style.a} ${style.b}`]}>LOTIFY</h3>
        <div className="flex px-1 py-1 gap-5 bg-red-500 text-white rounded-lg border-2 border-white">
          <h1>Favorites</h1>
          <h2>{data.filter((item) => item.added).length}</h2>
        </div>
      </div>
    </>
  );
}

export default Navbar;

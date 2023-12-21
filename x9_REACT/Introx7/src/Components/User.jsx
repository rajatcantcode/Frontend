import React from "react";
import { Link , Outlet } from "react-router-dom";
function User() {
  return (
    <>
      <div className="text-4xl flex justify-center items-center mt-20 bg-zinc-400 opacity-75">
        User
      </div>
      <div className="flex items-start justify-center flex-col ml-[20%] gap-4 mt-4">
        <Link
          to="/User/John"
          className="px-4 py-1 bg-red-300 rounded-lg text-sm hover:bg-red-500 hover:text-white"
        >
          Johny
        </Link>
        <Link
          to="/User/Rajat"
          className="px-4 py-1 bg-red-300 rounded-lg text-sm hover:bg-red-500 hover:text-white"
        >
          Rajat
        </Link>
        <Link
          to="/User/Simba"
          className="px-4 py-1 bg-red-300 rounded-lg text-sm hover:bg-red-500 hover:text-white"
        >
          Simba
        </Link>
      </div>
      <br></br>
      <hr />
      <Outlet />
    </>
  );
}

export default User;

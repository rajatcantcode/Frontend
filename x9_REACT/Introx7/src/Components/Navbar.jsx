import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="mt-10 flex justify-center gap-10 items-center">
      {/* home */}
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
      </NavLink>

      {/* User */}
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

      {/* About */}
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
    </nav>
  );
}

export default Navbar;

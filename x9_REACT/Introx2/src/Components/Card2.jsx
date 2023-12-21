import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

function Card2() {
  const [val, setVal] = useState(false);
  return (
    <div className="w-full h-screen flex justify-center items-center bg-blue-100">
      <div className="w-60 h-40 bg-zinc-400 rounded flex overflow-hidden">
        <img
          className={`shrink-0 relative w-full h-full object-cover ${
            val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"
          } transition-transform`}
          src="https://images.unsplash.com/photo-1702700415763-3ad5a9bdde48?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <img
           className={`shrink-0 relative w-full h-full object-cover ${
            val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"
          } transition-transform`}
          src="https://images.unsplash.com/photo-1702581783857-412fa1eb043f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3OHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <span
          onClick={() => setVal(() => !val)}
          className="absolute text-3xl bg-[#dadada7b] h-10 w-10 left-1/2 -translate-x-[50%] -translate-y-[50%] flex items-center justify-center rounded-full"
        >
          <FaArrowRight />
        </span>
      </div>
    </div>
  );
}
export default Card2;

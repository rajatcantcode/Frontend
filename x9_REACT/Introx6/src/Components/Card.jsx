import React from "react";

function Card({ item, handleRemove, index }) {
  const { name, image, email } = item;
  return (
    <>
      <div className="w-40 h-full bg-[#F5F5DC] rounded-lg overflow-hidden flex flex-col items-center p-2 gap-1">
        <div className="image w-full h-[60%] bg-zinc-200 rounded-lg overflow-hidden">
          <img className="w-full h-full object-cover" src={image} alt="" />
        </div>
        <h4 className="opacity-40 text-xs">{email}</h4>
        <h6 className="name font-semibold">{name} </h6>
        <h6 className="text-xs w-[80%] leading-none">
          Lorem ipsum dolor sit amet yes ipsum lorems
        </h6>
        <button
          onClick={() => handleRemove(index)}
          className="bg-red-600 px-1 rounded-md text-xs text-white"
        >
          Remove it
        </button>
      </div>
    </>
  );
}

export default Card;

import React from "react";

function Card({ data, handleClick, index }) {
  const { song, artist, img, added } = data;
  return (
    <>
      <div className="w-75 px-2 bg-white py-4 rounded-lg flex items-center justify-evenly gap-4 border border-orange-400">
        <div className="w-32 h-20 rounded-lg overflow-hidden ">
          <img className="h-full w-full object-cover" src={img} alt="" />
        </div>
        <div className="text-zinc-600 mt-2">
          <h1 className="text-lg font-semibold">{song}</h1>
          <h1 className="text-sm">{artist}</h1>
          <button
            onClick={() => handleClick(index)}
            className={`border ${
              added === false ? "border-red-600" : "bg-green-300"
            } rounded-full px-2 text-xs`}
          >
            {added === false ? "Add to Favorite" : "Added"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;



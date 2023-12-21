import React from "react";

function AddFriend({ index, values, handleClick }) {
  const { name, profession, image, friends } = values;
  return (
    <>
      <div className="w-60 h-60 bg-zinc-100 rounded overflow-hidden flex flex-col items-center justify-end">
        <div className="w-full h-40 bg-sky-600 ">
          <img className="h-full w-full object-cover" src={image} alt="" />
        </div>
        <div className="w-full p-4 font-semibold text-zinc-700">
          <h1 className="text-xl">{name}</h1>
          <h1 className="text-sm">{profession}</h1>
          <button
            onClick={() => handleClick(index)}
            className={`px-2 py-1 mt-3 text-xs ${
              friends === true ? "bg-green-500" : "bg-blue-500"
            } text-white bg-blue rounded-full`}
          >
            {friends === true ? "Friends" : "Add Friend"}
          </button>
        </div>
      </div>
    </>
  );
}

export default AddFriend;

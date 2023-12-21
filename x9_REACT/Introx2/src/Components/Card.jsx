import React from "react";

function Card() {
  const data = [
    {
      name: "GooseBumps",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, officiis",
    },
    {
      name: "NEFFEX",
      description: " Lorem ipsum dolor sit amet consectetur adipisicing ",
    },
    {
      name: "Arijit",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing yeah wassup boi yes i got you broke. Lorem ipsum dolor sit amet consectetur",
    },
  ];
  const handleDownload = ()=>{alert("Downloading...")};
  return (
    <>
      <div className="h-screen w-full bg-[#111111] flex flex-col justify-center items-center gap-10">
        {data.map((elem, index) => (
          <div className="w-80 px-3 py-3 bg-zinc-100 rounded">
            {/* on hovering over name downloading will start */}
            <h1 onMouseOver = {handleDownload} className="font-semibold text-2xl text-zinc-900">{elem.name}</h1>
            <p className="text-xs mt-2">
            {elem.description}
            </p>
            {/* We should now use like this this make code messy 👇 */}
            {/* <button onClick ={()=>{alert("Downloading...")}}className="px-2 py-1 bg-green-600 rounded-lg mt-3 font-semibold text-zinc-100">
              Download Now
            </button> */}
            {/* ********* VERY IMPORTANT ******** NEVER DO THIS */}
            {/*  onClick ={handleDownload()}<-dont use bracket otherwise it will start by itself */}
            <button onClick ={handleDownload}className="px-2 py-1 bg-green-600 rounded-lg mt-3 font-semibold text-zinc-100">
              Download Now
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
export default Card;

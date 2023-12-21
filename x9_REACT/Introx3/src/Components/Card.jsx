import React from "react";

// function Card(props) {
// But in industry we no more use the word - props we instead do destructuring 

function Card({text,color}) {
  return (
    <>
      <div className="p-8 flex">
        <button className={`px-3 py-2 ${color} text-white text-xs rounded`}>
          {text}
        </button>
      </div>
    </>
  );
}

export default Card;

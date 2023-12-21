import React, { useState } from "react";
import { useEffect } from "react";

function About() {
  const [value, setValue] = useState("Normal data");
  const [value2, setValue2] = useState("Large data");
  useEffect(() => {
    console.log("Service component is Created!");
    return () => {
      console.log("Service component is Destroyed!");
    };
  },[value2]);
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl">{value}</h1>
      <button
        onClick={() => setValue("Normal Data has been changed")}
        className="p-1 bg-blue-300 rounded-lg text-xs m-4 text-white font-mono"
      >
        Change Normal
      </button>
      <h1 className="text-3xl">{value2}</h1>
      <button
        onClick={() => setValue2("Large Data has been changed")}
        className="p-1 bg-red-300 rounded-lg text-xs m-4 text-white font-mono"
      >
        Change Large
      </button>
    </div>
  );
}

export default About;

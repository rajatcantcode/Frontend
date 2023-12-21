import React, { useState } from "react"; //<--Here is also changes
// import Card from "./Components/Card";

// ******************************------------BASIC------------***********************

// function main() {
//   const [score, setScore] = useState(10);
//   //index[0]= value & index[1]= function (value to be updated)
//   return (
//     <>
//       <h1 className="p-10">{score}</h1>
//       <button
//         onClick={() => setScore(200)}
//         className="p-5 bg-blue-200 flex rounded-full ml-5"
//       >
//         Change
//       </button>
//     </>
//   );
// }
// export default main;

// ******************************------------INTERMEDIATE------------***********************
//----------------Example 1
// function main() {
//   const [banned, setbanned] = useState(true);
//   return (
//     <>
//       <h1 className="p-10">{banned.toString()}</h1>
//       <button
//         onClick={() => setbanned(!banned)}//this is more optimised way setbanned(()=>!banned)
//         className="p-5 bg-blue-200 flex rounded-full ml-5"
//       >
//         ulta karo
//       </button>
//     </>
//   );
// }
// export default main;
//---------------Example 2 - Increasing number
// function main() {
//   const [value, updated] = useState(0);
//   return (
//     <>
//       <h1 className="p-10 flex">{value}</h1>
//       <button
//         onClick={() => updated((prev) => prev + 1)}
//         className="p-5 bg-blue-200 flex rounded-full ml-5"
//       >
//         Click to increase the value
//       </button>
//     </>
//   );
// }
// export default main;

// ******************************------------ADVANCED------------***********************

//----------->how to deal with objects
// function main(){
//   const [value,setVal] = useState({name:"Rajat",isBanned:false});
//   return(
//     <>
//     <h1 className="p-10 flex">{value.name} {value.isBanned.toString()}</h1>
//     <button
//     // For arrays and objects we cannot just give value we need to copy first and then updates the data
//       onClick = {()=>setVal({...value, isBanned:!value.isBanned})}
//       className="p-5 bg-blue-200 flex rounded-full ml-5"
//     >Click to change the value</button>
//     </>
//   )
// }
// export default main;

// ----------->We want to change the color of button when true - green & false - red
// function main() {
//   const [value, setVal] = useState({ name: "Rajat", isBanned: false });
//   return (
//     <>
//       <h1 className="p-10 flex">
//         {value.name} {value.isBanned.toString()}
//       </h1>
//       <button
//         // For arrays and objects we cannot just give value we need to copy first and then updates the data
//         onClick={() => setVal({...value, isBanned: !value.isBanned })}
//         className={`p-5 ${value.isBanned ? "bg-green-400 ": "bg-red-400"} flex rounded-full ml-5`}
//       >
//         Click to change the value and color
//       </button>
//     </>
//   );
// }
// export default main;

//----------->We want to add one more data into the object
// function main() {
//   const [value, setVal] = useState({ name: "Rajat", age: 24 });
//   return (
//     <div className="p-10 ">
//       <h1>x</h1>
//       <button
//         onClick={() => setVal({ ...value, gender: "male" })}
//         className="p-5 bg-blue-200"
//       >
//         Click
//       </button>
//       console.log(value);
//       {/* We can observer that no changes showing becuase it's done asynchornously */}
//       {/* Changes will not be shown immediately but after a couple of time */}
//     </div>
//   );
// }
// export default main;

//----------->Remove a number when a button is clicked in ARRAY
// function main() {
//   const [value, setVal] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
//   return (
//     <div className="p-10 bg-blue-100">
//       {value.map((elem) => (
//         <h1>{elem}</h1>
//       ))}
//       <button
//         onClick={() =>
//           setVal(() => value.filter((item, index) => index != value.length - 1))//This will run until index is true
//         }
//         className="p-2 bg-green-400 rounded-full text-zinc-100"
//       >
//         Click me
//       </button>
//     </div>
//   );
// }
// export default main;

//----------->We want to print the whole array but not 2nd index i.e..3 and will press button to delete it
// function main() {
//   const [value, setVal] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
//   return (
//     <div className="p-10 bg-blue-100">
//       {value.map((item) => (
//         <h1>{item}</h1>
//       ))}
//       <button
//         onClick={() =>
//           setVal(() =>
//             value.filter((item, index) => index != 2)
//           )
//         }
//         className="p-2 bg-green-400 rounded-full text-zinc-100"
//       >
//         Print
//       </button>
//     </div>
//   );
// }
// export default main;

//----------->How can we add an element in array
// function main() {
//   const [value, setVal] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
//   return (
//     <div className="p-10 bg-blue-100">
//       {value.map((item) => (
//         <h1>{item}</h1>
//       ))}
//       <button
//         onClick={() => setVal(() => [...value, 9])}
//         className="p-2 bg-green-400 rounded-full text-zinc-100"
//       >
//         Add
//       </button>
//     </div>
//   );
// }
// export default main;

//----------->how can we change the age of object in the array
// function main() {
//   const [value, setVal] = useState([
//     { name: "Rajat", age: 25 },
//     { name: "Dhaavik", age: 15 },
//     { name: "Simba", age: 5 },
//   ]);
//   return (
//     <div className="p-10 bg-blue-100">
//       {value.map((item) => (
//         <>
//           <h1>{item.name}</h1>
//           <h1>{item.age}</h1>
//         </>
//       ))}
//       <button
//         onClick={() =>
//           setVal(() =>
//             value.map(
//               (item) =>
//                 item.name === "Dhaavik" ? { name: "Dhaavik", age: 20 } : item //make sure to put object in round brackets in true condition
//             )
//           )
//         }
//         className="p-2 bg-green-400 rounded-full text-zinc-100"
//       >
//         Change the age of Dhaavik
//       </button>
//     </div>
//   );
// }
// export default main;

// ---------------------------------------------------DEMONSTRATION--------------------------------------------
import Card2 from "./Components/Card2";

function main() {
  return (
    <>
      <Card2 />
    </>
  );
}
export default main;

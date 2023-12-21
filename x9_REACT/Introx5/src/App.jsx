//----------------------******************* USING useRef() *******************-------------------

// import React, { useRef } from "react";

// function App() {
//   // hum 'null' isliye pass karte hain because
//   // we can pass any useRef(any HTML tag)
//   const name = useRef(null);
//   const age = useRef(null);

//   const handleSubmit = (details) => {
//     details.preventDefault();
//     console.log(name.current.value,age.current.value);
//   };

//   return (
//     <>
//       <div className="p-10 ">
//         <form action="" onSubmit={handleSubmit}>
//           <input ref={name} type="text" placeholder="Name" />
//           <input ref={age} type="Number" placeholder="Age" />
//           <input type="submit" />
//         </form>
//       </div>
//     </>
//   );
// }

// export default App;

//----------------------******************* Controlled Components *******************-------------------

// import React, { useState } from "react";

// function App() {
//   const [val, setVal] = useState({ name: "", email: "" });
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(val);
//   };
//   return (
//     <div className="p-10">
//       <form action="" onClick={handleSubmit}>
//         <input
//           // onChange={(event) => console.log(event.target.value)}
//           onChange={(event) => setVal({ ...val, name: event.target.value })}
//           type="text"
//           className="border-2"
//           placeholder="name"
//         />
//         <input
//           type="email"
//           onChange={(event) => setVal({ ...val, email: event.target.value })}
//           className="border-2"
//           placeholder="Email"
//         />
//         <input type="submit" />
//       </form>
//     </div>
//   );
// }

// export default App;

//----------------------******************* React Hook Form *******************-------------------
import React from "react";
import { useForm } from "react-hook-form";

function App() {
  const { register , handleSubmit } = useForm();
  console.log(register());
  return (
    <div className="p-10">
      <form action="" onSubmit={handleSubmit((data) => console.log(data))}>
        <input {...register("name")} type="text" placeholder="name" />
        <input {...register("email")} type="email" placeholder="Email" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;

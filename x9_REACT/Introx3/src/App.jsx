import React, { useState } from "react";
// import Card from "./Components/Card";
import AddFriend from "./Components/AddFriend";

function App() {
  // Add friend data
  const data = [
    {
      name: "Rajat",
      profession: "Developer",
      image:
        "https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D",
      friends: false,
    },
    {
      name: "Dhaavik",
      profession: "Gamer",
      image:
        "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdhbWVyfGVufDB8fDB8fHww",
      friends: false,
    },
    {
      name: "Simba",
      profession: "Barker",
      image:
        "https://images.unsplash.com/photo-1588022274210-7aab7c55c631?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z29sZGVuJTIwcmV0cmVpdmVyfGVufDB8fDB8fHww",
      friends: false,
    },
    {
      name: "Mannat",
      profession: "Smiley",
      image:
        "https://media.istockphoto.com/id/468465470/photo/a-handsome-black-man-with-a-bald-head-on-a-white-background.webp?b=1&s=170667a&w=0&k=20&c=OzsgljWIZzX3ukyIVSCG8Lv0LNE2hlRBGIKQ1euYqbQ=",
      friends: false,
    },
    {
      name: "Platy",
      profession: "Platypus",
      image:
        "https://images.unsplash.com/photo-1631629571979-1c82e81c7cee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxhdHlwdXN8ZW58MHx8MHx8fDA%3D",
      friends: false,
    },
  ];
  const [realData, setRealData] = useState(data);
  //useState jahan banti hain vahan hi sirf modify ki jaa skti hain
  //We will sent the data parent to child with the help of handleFriendsButton fxn
  const handleFriendsButton = (cardindex) => {
    setRealData((previous) => {
      return previous.map((item, index) => {
        if (index === cardindex) {
          return { ...item, friends: !item.friends };
        }
        return item;
      });
    });
  };

  return (
    <>
      {/* --------------PROPS INTRO ->Card---------------------- */}
      {/* <Card text = "Rajat" color = "bg-green-300" />
      <Card text = "Dhaavik" color = "bg-red-300"/> */}

      {/*--------------Task - ADD FRIEND --------------*/}
      <div className="h-screen w-full bg-zinc-500 flex gap-10 p-10 items-center justify-center">
        {realData.map((items, index) => (
          <AddFriend
            index={index}
            values={items}
            handleClick={handleFriendsButton}
          />
        ))}
      </div>
    </>
  );
}

export default App;

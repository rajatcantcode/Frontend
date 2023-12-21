import React, { useState } from "react";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";

function App() {
  const data = [
    {
      song: "Unhappy",
      artist: "Pharrell Williams",
      img: "https://images.unsplash.com/photo-1520454125516-134a66d9bf78?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c29uZyUyMHRlcm1wbGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
      added: false,
    },
    {
      song: "Someone Like You",
      artist: "Adele",
      img: "https://images.unsplash.com/photo-1474959783111-a0f551bdad25?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvbmclMjB0ZXJtcGxhdGV8ZW58MHx8MHx8fDA%3D",
      added: false,
    },
    {
      song: "Imagine",
      artist: "John Lennon",
      img: "https://images.unsplash.com/photo-1651748791079-89eb11100906?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNvbmclMjB0ZXJtcGxhdGV8ZW58MHx8MHx8fDA%3D",
      added: false,
    },
    {
      song: "Rolling in the Deep",
      artist: "Adele",
      img: "https://images.unsplash.com/photo-1635491512913-bd473a066d1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWRlbGV8ZW58MHx8MHx8fDA%3D",
      added: false,
    },
    {
      song: "Billie Jean",
      artist: "Michael Jackson",
      img: "https://images.unsplash.com/photo-1577640905050-83665af216b9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWljaGVhbCUyMGphY2tzb258ZW58MHx8MHx8fDA%3D",
      added: false,
    },
    {
      song: "Shape of You",
      artist: "Ed Sheeran",
      img: "https://images.unsplash.com/photo-1606158816714-95c4404e8c52?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWQlMjBzaGVlcmFufGVufDB8fDB8fHww",
      added: false,
    },
    {
      song: "Bohemian Rhapsody",
      artist: " Queen",
      img: "https://images.unsplash.com/photo-1436831135709-48bdc150cce5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWRlbGV8ZW58MHx8MHx8fDA%3D",
      added: false,
    },
    {
      song: "Moonlight Sonata",
      artist: " Ludwig van Beethoven",
      img: "https://images.unsplash.com/photo-1617406388600-cf541f79ea55?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWQlMjBzaGVlcmFufGVufDB8fDB8fHww",
      added: false,
    },
  ];
  const [songData, setData] = useState(data);
  const handleClick = (index) => {
    setData((prev) => {
      return prev.map((items, i) => {
        if (i === index) {
          return {
            ...items,
            added: !items.added,
          };
        }
        return items;
      });
    });
  };
  return (
    <>
      <div className="h-screen w-full bg-zinc-300 gap-10 p-10 ">
        <Navbar data={songData}/>
        <div className="flex gap-4 shrink-0 mt-10 flex-wrap">
          {songData.map((items, index) => (
            <Card
              data={items}
              handleClick={handleClick}
              index={index}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

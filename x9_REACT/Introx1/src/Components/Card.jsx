import React from "react";
/*@Tailwind CSS in React -> className not only class*/
function Card() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW1hem9uJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
      name: "Almond Oil",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      instock: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1633174524778-61a18ee54490?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Amazon",
      description: "Lorem ipsum dolor sit amet",
      instock: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1589254065909-b7086229d08c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cm9ib3R8ZW58MHx8MHx8fDA%3D",
      name: "Robot",
      description: "Lorem ipsum dolor sit ametconsectetur",
      instock: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1696429175928-793a1cdef1d3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFpfGVufDB8fDB8fHww",
      name: "Vr",
      description: "lorem yes it that is so god and futuritic",
      instock: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWV8ZW58MHx8MHx8fDA%3D",
      name: "Film",
      description: "Yes there we go the most advanced technology in the world",
      instock: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=3398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Shoes",
      description: "World's most expensive shoes",
      instock: false,
    },
  ];
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white relative gap-20">
      {data.map((elem, index) => (
        <div
          key={index}
          className="w-52 bg-gray-100 rounded-lg overflow-hidden"
        >
          <div className="w-full h-32 bg-red-500">
            <img
              className="h-full w-full object-cover"
              src={elem.image}
              alt=""
            />
          </div>
          <div className="w-full px-3 py-4">
            <h2 className="font-semibold">{elem.name}</h2>
            <p className="text-xs mt-3">{elem.description}</p>
            {/* <button className="mt-4 text-zinc-100">
              {elem.instock ? <h1 className="bg-green-400 px-2 py-1">InStock</h1> : <h1 className="bg-red-400 px-2 py-1">Out of Stock</h1>}
            </button> */}
            {/* --------------------We can also write like this 👇-------------------- */}
            <button
              className={`px-2 py-1 mt-4 
              ${elem.instock ? "bg-green-400" : "bg-red-400"} text-zinc-100`}
            >
              {elem.instock ? "InStock" : "Out of Stock"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Card;

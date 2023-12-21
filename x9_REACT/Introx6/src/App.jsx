import React, { useState } from "react";
import Cards from "./Components/Cards";
import Form from "./Components/Form";

function App() {
  const [users, setUsers] = useState([]);
  const handleFormSubmitData = (data) => {
    setUsers([...users, data]);
  };

  const handleRemove = (id) => {
    setUsers(() => users.filter((user, index) => index != id)); //sabko put karo jiska index != id
  };

  return (
    <>
      <div className="w-full h-screen bg-zinc-200 p-10 flex">
        <div className="container mx-auto flex flex-col mt-[2%] items-center">
          <Form handleFormSubmitData={handleFormSubmitData} />
          <Cards handleRemove={handleRemove} users={users} />
        </div>
      </div>
    </>
  );
}

export default App;

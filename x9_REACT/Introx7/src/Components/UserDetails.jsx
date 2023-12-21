import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function UserDetails() {
  const { name } = useParams();
  const navigate = useNavigate();
  const GoBackHandler = () => {
    // navigate("/user");
    navigate(-1);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-[15%]">
        <h1 className="text-4xl hover:text-green-300 ">Hey {name}</h1>
        <button
          onClick={GoBackHandler}
          className="bg-blue-200 rounded-md p-3 mt-10"
        >
          Go back
        </button>
      </div>
    </>
  );
}

export default UserDetails;

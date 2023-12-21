import React from "react";
import { useForm } from "react-hook-form";

function Form({ handleFormSubmitData }) {
  const { register, handleSubmit, reset } = useForm();
  const handleSubmitData = (data) => {
    handleFormSubmitData(data);
    reset(); //will clear the inputs
  };
  return (
    <>
      <div className="w-[calc(100vw-30%)] h-[10vh] flex justify-between items-center">
        <form
          onSubmit={handleSubmit(handleSubmitData)}
          className="w-full flex justify-evenly items-center gap-3"
        >
          <input
            {...register("name")}
            type="text"
            placeholder="name"
            className="rounded-lg px-2 py-1 text-sm outline-none"
          />
          <input
            {...register("email")}
            type="text"
            placeholder="email"
            className="rounded-lg px-2 py-1 text-sm outline-none"
          />
          <input
            {...register("image")}
            type="text"
            placeholder="image url"
            className="rounded-lg px-2 py-1 text-sm outline-none"
          />
          <input
            type="submit"
            className="bg-blue-400 rounded-lg px-2 text-base outline-none  text-white"
          />
        </form>
      </div>
    </>
  );
}

export default Form;

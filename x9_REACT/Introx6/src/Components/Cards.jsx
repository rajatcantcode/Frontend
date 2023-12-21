import React from "react";
import Card from "./Card";

function Cards({ users, handleRemove }) {
  return (
    <>
      <div className="w-[calc(100vw-30%)] h-[32vh] p-4 gap-4 flex items-center flex-wrap">
        {users.map((item, index) => {
          return (
            <Card
              handleRemove={handleRemove}
              item={item}
              key={index}
              index={index}
            />
          );
        })}
      </div>
    </>
  );
}

export default Cards;

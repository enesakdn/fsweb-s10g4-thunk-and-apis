import React from "react";

function Item({ data }) {
  return (
    <div className="shadow-md bg-white text-center">
      <img src={data.message} />
    </div>
  );
}

export default Item;

import React from "react";
import { removeFav } from "../actions";
import { useDispatch } from "react-redux";

function FavItem({ resimUrl, id }) {
  const dispatch = useDispatch();

  const favKaldır = (a) => {
    dispatch(removeFav(a));
  };

  return (
    <>
      <div>
        <img src={resimUrl} />
        <button
          onClick={() => {
            favKaldır(id);
          }}
        >
          Çıkar
        </button>
      </div>
    </>
  );
}

export default FavItem;

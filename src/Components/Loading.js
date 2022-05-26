import React, { useContext } from "react";
import { MainContext } from "./context";
import { BsBook } from "react-icons/bs";
const Loading = () => {
  const { book } = useContext(MainContext);
  return (
    <div>
      {!book && (
        <div className="loading">
          <BsBook className="loading__spinner" />
          <h2 className="loading__text">Loading...</h2>
        </div>
      )}
    </div>
  );
};

export default Loading;

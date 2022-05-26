import React, { useContext } from "react";
import { MainContext } from "./context";
import { BiErrorCircle } from "react-icons/bi";
const Error = () => {
  const { book } = useContext(MainContext);
  return (
    <div className="error">
      {book && !book[0] && (
        <div>
          <ul className="error__content">
            <li>
              <div></div>
              <div></div>
            </li>
            <li>
              <div></div>
              <div></div>
            </li>
            <li>
              <div></div>
              <div></div>
            </li>
          </ul>
          <p className="error__text">There is no board to show</p>
          <BiErrorCircle className="error__icon" />
        </div>
      )}
    </div>
  );
};

export default Error;

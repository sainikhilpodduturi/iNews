import React from "react";
import load from "./load.gif";

const Spinner = (props) => {
  let spinnerStyle = {
    filter: "invert(100%)",
  };
  return (
    <>
      {props.mode === "dark" && (
        <div className="text-center my-4" style={spinnerStyle}>
          <img src={load} alt="loading" />
        </div>
      )}
      {props.mode === "light" && (
        <div className="text-center my-4">
          <img src={load} alt="loading" />
        </div>
      )}
    </>
  );
};

export default Spinner;

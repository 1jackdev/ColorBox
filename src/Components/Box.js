import { React } from "react";
import "./Box.css";

const Box = ({ backgroundColor, width, height }) => {
  return (
    <div className="box-container">
      <button className="btn">X</button>
      <div
        style={{
          backgroundColor: backgroundColor,
          width: `${width}px`,
          height: `${height}px`,
        }}
      ></div>
    </div>
  );
};

export default Box;

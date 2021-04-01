import { React } from "react";
import "./Box.css";

const Box = ({ id, backgroundColor, width, height, handleRemove }) => {
    const remove = () => handleRemove(id);
  return (
    <div key={id} className="box-container">
      <button type="button" onClick={remove} className="btn">
        X
      </button>
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

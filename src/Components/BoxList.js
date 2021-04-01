import { React, useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import "./BoxList.css";

const BoxList = () => {
  const INITIAL_STATE = [
    {
      backgroundColor: "blue",
      width: 100,
      height: 100,
    },
    {
      backgroundColor: "yellow",
      width: 200,
      height: 100,
    },
    {
      backgroundColor: "red",
      width: 100,
      height: 200,
    },
  ];
  const [boxList, setBoxList] = useState(INITIAL_STATE);

  const addBox = (backgroundColor, width, height) => {
    setBoxList((boxes) => 
      [...boxList, { backgroundColor, width, height }]);
  };

  return (
    <div className="container">
      <NewBoxForm addBox={addBox} />
      <div className="box-list">
        {boxList.map(({ backgroundColor, width, height }, idx) => (
          <Box
            key={idx}
            backgroundColor={backgroundColor}
            width={width}
            height={height}
          />
        ))}
      </div>
    </div>
  );
};

export default BoxList;

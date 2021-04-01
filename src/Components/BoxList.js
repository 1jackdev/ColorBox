import { React, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import "./BoxList.css";

const BoxList = () => {
  const INITIAL_STATE = [];
  const [boxList, setBoxList] = useState(INITIAL_STATE);

  const addBox = (backgroundColor, width, height) => {
    setBoxList((boxes) => [
      ...boxList,
      { id: uuidv4(), backgroundColor, width, height },
    ]);
  };

  function handleRemove(id) {
    const newBoxList = boxList.filter((box) => box.id !== id);

    setBoxList(newBoxList);
  }

  return (
    <div className="container">
      <NewBoxForm addBox={addBox} />
      <div className="box-list">
        {boxList.map(({ id, backgroundColor, width, height }) => (
          <Box
            key={id}
            id={id}
            backgroundColor={backgroundColor}
            width={width}
            height={height}
            handleRemove={handleRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default BoxList;

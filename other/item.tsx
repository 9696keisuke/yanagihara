import React from "react";

const layoutAreaStyle = {
  width: 400,
  height: 300,
  overflow: "hidden",
};
const Item: React.FC = () => {
  const [boxSize, setBoxSize] = React.useState(20);
  const boxStyle = {
    width: boxSize,
    height: boxSize,
    boxShadow: "inset -1px -1px #0275b8",
    opacity: 0.4,
  };
  const getBoxCount = () => {
    const countX = Math.floor(layoutAreaStyle.width / boxSize) + 1;
    const countY = Math.floor(layoutAreaStyle.height / boxSize) + 1;
    return countX * countY;
  };
  const [boxCount, setBoxCount] = React.useState(getBoxCount());
  const boxSizeChanged = (event: { currentTarget: any }) => {
    const numberInput = event.currentTarget;
    const newBoxSize = parseInt(numberInput.value, 10);
    setBoxSize(newBoxSize);
    setBoxCount(getBoxCount);
  };
  return boxCount, boxSizeChanged;
};

export default Item;

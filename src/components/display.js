import React from "react";

const Display = (props) => {
  const { value } = props;
  return (
    <div className="contDisplay">
      <input className="display" type="text" value={value} readOnly />
    </div>
  );
};

export default Display;

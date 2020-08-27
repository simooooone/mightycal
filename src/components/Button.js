import React from "react";

const ItemButton = (props) => {
  const { buttonClass, onClick, itemText } = props;

  return (
    <button className={buttonClass} onClick={onClick}>
      {itemText}
    </button>
  );
};

export default ItemButton;

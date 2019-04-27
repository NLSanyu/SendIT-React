import React from "react";

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={props.className}
      id={props.id}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Button;

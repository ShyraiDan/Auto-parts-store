import React from "react";
import "./Button.css";
function Button(props) {
  return (
    <>
      <li class={`filter__item ` + props.class}>{props.text}</li>
    </>
  );
}
export default Button;

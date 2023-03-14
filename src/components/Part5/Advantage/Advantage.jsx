import React from "react";
import "./Advantage.css";
function Advantage(props) {
  return (
    <>
      <div class={props.class}>
        <span class={props.icon}></span>
        <h4 class="part-five__subtitle">{props.text}</h4>
      </div>
    </>
  );
}
export default Advantage;

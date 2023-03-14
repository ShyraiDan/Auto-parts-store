import React from "react";
import "./Card1.css";
function Card1(props) {
  return (
    <>
      <div class="part-three__item">
        <div class="part-three__top">
          {/* <h3 class="part-three__subtitle">1 yr replacement if defective</h3> */}
          <h2 class="part-three__title">{props.title}</h2>
          <p class="part-three__price">{props.price}</p>
          <button class="part-three__shopping">Shop Now</button>
        </div>
        <div class="part-three__img-container">
          <img src={props.photo} class="part-three__img" />
        </div>
      </div>
    </>
  );
}
export default Card1;

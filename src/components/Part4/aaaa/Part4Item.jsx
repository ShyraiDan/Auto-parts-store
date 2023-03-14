import React from "react";
import "./Part4Item.css";
function Part4Item(props) {
  console.log(1);
  return (
    <>
      <div class="part-four__item">
        <div class="part-four__img-container">
          <img src={props.photo} class="part-four__photo" />
        </div>
        <div class="part-four__bottom">
          <h4 class="part-four__subtitle">{props.name}</h4>
          <p class="part-four__price">${props.price}</p>
        </div>
      </div>
    </>
  );
}
export default Part4Item;

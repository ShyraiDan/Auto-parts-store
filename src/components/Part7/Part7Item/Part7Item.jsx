import React from "react";
import "./Part7Item.css";
function Part7Item(props) {
  return (
    <>
      <div class="part-seven__item">
        <a class="part-seven__link">
          <div>
            <img src={props.image} class="part-seven__img" />
          </div>
        </a>
      </div>
    </>
  );
}
export default Part7Item;

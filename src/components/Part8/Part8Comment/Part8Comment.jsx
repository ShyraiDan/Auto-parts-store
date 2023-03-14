import React from "react";
import "./Part8Comment.css";
function Part8Comment(props) {
  return (
    <>
      <div class={props.class}>
        <div class="part-eight__img-container">
          <a class="part-eight__link">
            <div>
              <img class="part-eight__img" src={props.image} />
            </div>
          </a>
        </div>
        <div class="part-eight__subcontainer">
          <div class="part-eight__top">
            <div class="part-eight__left">
              <img src={props.logo} class="part-eight__user" />
            </div>
            <div class="part-eight__right">
              <h4 class="part-eight__subtitle">{props.name}</h4>
              <p class="part-eight__date">{props.date}</p>
            </div>
          </div>
          <div class="part-eight__bottom">
            <p class="part-eight__text">{props.text}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Part8Comment;

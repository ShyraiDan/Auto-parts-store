import React from "react";
import "./SliderItem.css";
function SliderItem(props) {
  return (
    <>
      <div class="slider__item">
        <div class="slider__container">
          <div class="slider__left">
            <a href="">
              <div class="slider__img-container">
                <img src={props.photo} class="slider__img" />
              </div>
            </a>
          </div>
          <div class="slider__right">
            <h4 class="slider__title">
              <a class="slider__link" href="#">
                {props.name}
              </a>
            </h4>
            <p class="slider__text">Wheel Covers</p>
            <p class="slider__text slider__text_mb">Tire Chains</p>
            <a href="" class="slider__link slider__link_show">
              Show All <span></span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default SliderItem;

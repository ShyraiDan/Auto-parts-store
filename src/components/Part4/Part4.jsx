import React from "react";
import "./Part4.css";
import Button from "./Button/Button";
import Img1 from "../../i/image-1.jpg";
import Img2 from "../../i/image-2.jpg";
import Img3 from "../../i/image-3.jpg";
import Img4 from "../../i/image-4.jpg";
import Img5 from "../../i/image-5.jpg";
import Img6 from "../../i/image-6.jpg";
import Img7 from "../../i/image-7.jpg";
import Img8 from "../../i/image-8.jpg";
import Part4Item from "./aaaa/Part4Item";
function Part4(props) {
  const filter = [
    { text: "Sale Products", class: "sale" },
    { text: "Latest Products", class: "latest" },
    { text: "Top Rated Products", class: "top" },
  ];
  const goods = [
    {
      name: "Macheta Motor",
      date: "01 13 2022",
      rating: 9.4,
      price: "45.00",
      sale: 4,
      id: 1,
      photo: Img1,
    },
    {
      name: "Scientific Tango",
      date: "01 14 2022",
      rating: 9.3,
      price: "45.00",
      sale: 3,
      id: 2,
      photo: Img2,
    },
    {
      name: "Delinte Tires",
      date: "01 15 2022",
      rating: 9.2,
      price: "45.00",
      sale: 1,
      id: 3,
      photo: Img3,
    },
    {
      name: "Stem Gatling",
      date: "01 16 2022",
      rating: 9.0,
      price: "45.00",
      sale: 2,
      id: 4,
      photo: Img4,
    },
    {
      name: "Steerling Wheel",
      date: "01 17 2022",
      rating: 10,
      price: "45.00",
      sale: 5,
      id: 5,
      photo: Img5,
    },
    {
      name: "Sparco Shift knob",
      date: "01 18 2022",
      rating: 9.9,
      price: "45.00",
      sale: 6,
      id: 6,
      photo: Img6,
    },
    {
      name: "Engine Oil",
      date: "11 19 2021",
      rating: 7.8,
      price: "45.00",
      sale: 7,
      id: 7,
      photo: Img7,
    },
    {
      name: "Ohlins Shock",
      date: "02 18 2022",
      rating: 8.5,
      price: "45.00",
      sale: 8,
      id: 8,
      photo: Img8,
    },
  ];
  return (
    <>
      <div class="part-four">
        <div class="container container_four">
          <div class="part-four__subcontainer">
            <h2 class="part-four__title">Popular categories</h2>
            <div class="filter">
              <ul class="filter__list">
                {filter.map((item) => {
                  return <Button text={item.text} class={item.class} />;
                })}
              </ul>
            </div>
          </div>
          <div class="part-four__goods">
            {goods.map((item, i) => {
              return (
                <Part4Item
                  photo={item.photo}
                  name={item.name}
                  price={item.price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default Part4;

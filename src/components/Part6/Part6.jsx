import React from "react";
import "./Part6.css";
import Img1 from "../../i/image-9.jpg";
import Img2 from "../../i/image-10.jpg";
import Img3 from "../../i/image-11.jpg";
import Img4 from "../../i/image-12.jpg";
import Img5 from "../../i/image-13.jpg";
import Img6 from "../../i/image-14.jpg";
import SliderItem from "./SliderItem/SliderItem";
function Part6(props) {
  const items = [
    { photo: Img1, name: "AZA-506 Wheels" },
    { photo: Img3, name: "Ohlins Shock" },
    { photo: Img5, name: "Brake Caliper" },
    { photo: Img2, name: "Delinte Tires" },
    { photo: Img6, name: "Engine Oil" },
    { photo: Img4, name: "Motorcycle helmets" },
  ];
  return (
    <>
      <div class="part-six">
        <div class="container">
          <h2 class="part-six__title">Popular Category</h2>
          <div>
            {items.map((item) => {
              return <SliderItem photo={item.photo} name={item.name} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default Part6;

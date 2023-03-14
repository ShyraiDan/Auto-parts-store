import React from "react";
import "./Part3.css";
import Card1 from "../Card1/Card1";
import Img1 from "./../../i/image-1.png";
import Img2 from "./../../i/image-2.png";
import Img3 from "./../../i/image-3.png";
function Part3(props) {
  const goods = [
    {
      title: "Hans sparco club 3",
      price: "$35.00",
      photo: Img1,
    },
    {
      title: "Towling and Hauling",
      price: "$78.00",
      photo: Img2,
    },
    {
      title: "Transmission Filter",
      price: "$235.00",
      photo: Img3,
    },
  ];
  return (
    <>
      <div class="part-three">
        <div class="container container_pd">
          {goods.map((item) => {
            return (
              <Card1 title={item.title} price={item.price} photo={item.photo} />
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Part3;

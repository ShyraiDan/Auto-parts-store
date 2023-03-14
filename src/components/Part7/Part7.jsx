import React from "react";
import "./Part7.css";
import Image1 from "../../i/client-logo-1.jpg";
import Image2 from "../../i/client-logo-2.jpg";
import Image3 from "../../i/client-logo-3.jpg";
import Image4 from "../../i/client-logo-4.jpg";
import Image5 from "../../i/client-logo-5.jpg";
import Image6 from "../../i/client-logo-6.jpg";
import Image7 from "../../i/client-logo-7.jpg";
import Image8 from "../../i/client-logo-8.jpg";
import Part7Item from "./Part7Item/Part7Item";

function Part7(props) {
  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
  ];
  return (
    <>
      <div class="part-seven">
        <div class="container container_seven">
          <h2 class="part-seven__title">Shop by Brands</h2>
          <div class="part-seven__group">
            {images.map((item) => {
              return (
                <>
                  <Part7Item image={item} />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default Part7;

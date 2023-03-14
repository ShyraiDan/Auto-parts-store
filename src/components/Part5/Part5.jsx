import React from "react";
import "./Part5.css";
import Advantage from "./Advantage/Advantage";
function Part5(props) {
  const advantage = [
    {
      icon: "icon icon-truck",
      class: "part-five__item part-five__item_top animation",
      text: "Free Shipping Worldwide",
    },
    {
      icon: "icon icon-truck",
      class: "part-five__item animation animation_delay",
      text: "Money Back Guarantee",
    },
    {
      icon: "icon icon-truck",
      class: "part-five__item animation animation_delaytwo",
      text: "Online Support 24/7",
    },
    {
      icon: "icon icon-truck",
      class: "part-five__item animation animation_delaythree",
      text: "Comfort Payments",
    },
  ];
  return (
    <>
      <div class="part-five">
        <div class="container container_part-five">
          <div class="part-five__subcontainer">
            {advantage.map((item) => {
              return (
                <Advantage
                  icon={item.icon}
                  class={item.class}
                  text={item.text}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default Part5;

import React from "react";
import "./Part8.css";
import background1 from "../../i/news-1.jpg";
import background2 from "../../i/news-2.jpg";
import background3 from "../../i/news-3.jpg";
import logo1 from "../../i/author-1.jpg";
import logo2 from "../../i/author-2.jpg";
import logo3 from "../../i/author-3.jpg";
import Part8Comment from "./Part8Comment/Part8Comment";
function Part8(props) {
  const comments = [
    {
      userName: "Leanne Graham",
      class: "part-eight__item animation",
      image: background1,
      logo: logo1,
      text: "How To Remove Salt From Your Car’s Interior And Exterior",
      date: "February 20, 2020",
    },
    {
      userName: "Ervin Howell",
      class: "part-eight__item animation animation_delay",
      image: background2,
      logo: logo2,
      text: "What To Do If You Get Into A Car Accident In Ontario",
      date: "February 20, 2020",
    },
    {
      userName: "Clementine Bauch",
      class: "part-eight__item animation animation_delaytwo",
      image: background3,
      logo: logo3,
      text: "How To Prepare A Winter Emergncy Kit For Your Vehicle",
      date: "February 20, 2020",
    },
  ];
  return (
    <>
      <div class="part-eight">
        <div class="container container_eight">
          <h2 class="part-eight__title">Latest Blog Posts</h2>
          <div class="part-eight__group">
            {comments.map((item) => {
              return (
                <>
                  <Part8Comment
                    userName={item.userName}
                    class={item.class}
                    image={item.image}
                    logo={item.logo}
                    text={item.text}
                    date={item.date}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Part8;

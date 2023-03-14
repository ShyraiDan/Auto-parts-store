import React from "react";
import "./FooterRight.css";
function FooterRight(props) {
  const top = ["Contact Us", "678-473-1667", "Yourname@mail.com"];
  const bottom = ["Our Address", "4959 Adonais Way Duluth, GA 30136"];
  return (
    <>
      <div class="footer-right">
        <h3 class="footer-right__title">Get in touch</h3>
        <div class="footer-right__top">
          <ul class="footer-right__list">
            {top.map((item, i) => {
              return (
                <>
                  <li class="footer-right__item">
                    {i == 0 ? (
                      <p class="footer-right__text">{item}</p>
                    ) : (
                      <a href="" class="footer-right__link">
                        {item}
                      </a>
                    )}
                  </li>
                </>
              );
            })}
          </ul>
        </div>
        <div class="footer-right__bottom">
          <ul class="footer-right__list">
            {bottom.map((item, i) => {
              return (
                <>
                  <li class="footer-right__item">
                    {i == 0 ? (
                      <p class="footer-right__text">{item}</p>
                    ) : (
                      <a href="" class="footer-right__link">
                        {item}
                      </a>
                    )}
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
export default FooterRight;

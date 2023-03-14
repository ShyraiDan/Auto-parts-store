import React from "react";
import "./FooterSocial.css";
function FooterSocial(props) {
  const icons = ["facebook", "twitter", "google-plus", "dribbble"];
  return (
    <>
      <div class="footer-left__social">
        <ul class="footer-left__group">
          {icons.map((item) => {
            return (
              <>
                <li class="footer-left__item">
                  <a href="" class="footer-left__link">
                    <span class={`icon icon-${item}`}></span>
                  </a>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}
export default FooterSocial;

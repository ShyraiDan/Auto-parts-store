import React from "react";
import "./FooterCenter.css";
function FooterCenter(props) {
  return (
    <>
      <div class="footer-center-left">
        <h3 class="footer-center-left__title">{props.title}</h3>
        <ul class="footer-center-left__group">
          {props.links.map((item) => {
            return (
              <>
                <li class="footer-center-left__item">
                  <a href="" class="footer-center-left__link">
                    {item}
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
export default FooterCenter;

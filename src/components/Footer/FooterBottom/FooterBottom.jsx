import React from "react";
import "./FooterBottom.css";
function FooterBottom(props) {
  const nav = ["Home", "About", "Blog", "Contact"];
  return (
    <>
      <div class="footer__nav">
        <ul class="footer__list">
          {nav.map((item, i) => {
            return (
              <>
                <li class="footer__item">
                  <a
                    href=""
                    class={
                      `footer__link` + i == nav.length - 1
                        ? " footer__link_border"
                        : ""
                    }
                  >
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
export default FooterBottom;

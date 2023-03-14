import React from "react";
import "./FooterLeft.css";
import FooterSocial from "./FooterSocial/FooterSocial";
import Img2 from "../../../i/logo-2.png";
function FooterLeft(props) {
  return (
    <>
      <div class="footer-left">
        <div class="footer-left__img-container">
          <img src={Img2} class="footer-left__img" />
        </div>
        <p class="footer-left__text">
          The probability of someone needing your services or wantin Lorem ipsum
          dolor sit amet
        </p>
        <FooterSocial />
      </div>
    </>
  );
}
export default FooterLeft;

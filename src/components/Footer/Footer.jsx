import React from "react";
import "./Footer.css";
import FooterLeft from "./FooterLeft/FooterLeft";
import FooterCenter from "./FooterCenter/FooterCenter";
import FooterRight from "./FooterRight/FooterRight";
import FooterBottom from "./FooterBottom/FooterBottom";
function Footer(props) {
  const center = [
    {
      title: "Useful Links",
      links: [
        "All properties",
        "FAQ`S",
        "Terms & Conditions",
        "Sign up",
        "Articles",
        " Popular tags",
      ],
    },
    {
      title: "Why buy from us",
      links: [
        "Solicitory",
        "Bushiness Planning",
        "Human Resources",
        "Bonds & Commodities",
        "Financial Projections",
        "Trade & Stocks",
      ],
    },
  ];
  const items = [];
  return (
    <>
      <footer class="footer">
        <div class="container container_footer">
          <FooterLeft />
          {center.map((item) => {
            return (
              <>
                <FooterCenter title={item.title} links={item.links} />
              </>
            );
          })}
          <FooterRight />
        </div>
        <div class="footer__bottom">
          <div class="footer__copyright">
            <p class="footer__text">
              ©2021 CopyRight Example. All rights reserved.
            </p>
          </div>
          <FooterBottom />
        </div>
      </footer>
    </>
  );
}
export default Footer;

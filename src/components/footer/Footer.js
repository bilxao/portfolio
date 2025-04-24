import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("© 2025 Syed Bilal Shah – GameDev | XR | Web3")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Visit my{" "}
          <a
            href="https://github.com/bilxao"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </p>
      </div>
    </Fade>
  );
}

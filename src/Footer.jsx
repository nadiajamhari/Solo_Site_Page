import React from "react";
import {
  AiFillTwitterSquare,
  AiFillFacebook,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMediaIcon">
        <a href="#">
          <AiFillTwitterSquare />
        </a>
        <a href="#">
          <AiFillFacebook />
        </a>
        <a href="#">
          <AiFillInstagram />
        </a>
        <a href="#">
          <AiFillGithub />
        </a>
      </div>
    </div>
  );
}

export default Footer;

import React from "react";
import profilePhoto from "./assets/profilePicture.jpg";
import { AiTwotoneMail, AiFillLinkedin } from "react-icons/ai";

function Info() {
  return (
    <div className="info">
      <img className="profilePhoto" src={profilePhoto} alt="Profie Photo" />
      <h2>Jason Smith</h2>
      <h4>Frontend Developer</h4>
      <p>jasonsmith.website</p>
      <div className="buttonInfo">
        <button className="emailButton">
          <AiTwotoneMail /> <span className="textButton"> Email</span>
        </button>
        <button className="linkedlnButton">
          <AiFillLinkedin /> <span className="textButton"> Linkedln</span>
        </button>
      </div>
    </div>
  );
}

export default Info;

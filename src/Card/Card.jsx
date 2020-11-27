import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="mainCard">
      <div className="title">{props.title}</div>
      <div className="content">{props.content}</div>
      <div className="p">
        <a href="#" target="blank" className="link">
          {props.text}
        </a>
      </div>
      <div className="container">
        <img className="img" src={props.link} alt="image" />
      </div>
    </div>
  );
};

export default Card;

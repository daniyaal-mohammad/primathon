import React from "react";
import Card from "../Card/Card";
import "./Apps.css";
import Image from "../Assets/bloom-hotel.svg";
import Imagea from "../Assets/bloom-lobby.svg";
import Imageb from "../Assets/careers.svg";
const Data = [
  {
    title: "Developers & Owners",
    content: "We're growing rapidly across the country, don’t miss out.",
    text: "Partner with us",
    link: Image,
  },
  {
    title: "Corporate Bookings",
    content: "With a Bloom in most major cities, we’re the best hotel partner.",
    text: "Get in touch",
    link: Imagea,
  },
  {
    title: "Careers @ Bloom",
    content: "Work with a team that’s transforming hospitality.",
    text: "Bloom with us",
    link: Imageb,
  },
];

const renderCard = (value) => {
  return (
    <Card
      title={value.title}
      content={value.content}
      text={value.text}
      link={value.link}
    ></Card>
  );
};

const Apps = () => {
  return <div className="mainApp">{Data.map(renderCard)}</div>;
};

export default Apps;

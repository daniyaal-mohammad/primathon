import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card/Card';
import "./index.css";
import Apps from './Apps/Apps';

ReactDOM.render(
  <div>
    {/* <div className = "main">
    <Card title = "Developers & Owners"
    content = "We're growing rapidly across the country, don’t miss out."
    text = "Partner with us"
    link = {Image}
    >
    </Card>
    <Card title = "Corporate Bookings"
    content = "With a Bloom in most major cities, we’re the best hotel partner."
    text = "Get in touch"
    link = {Imagea}
    >
    </Card>
    <Card title = "Careers @ Bloom"
    content = " Work with a team that’s transforming hospitality."
    text = " Bloom with us"
    link = {Imageb}
    >
    </Card> */}
  {/* </div> */}
    <Apps/>
  </div>,
  document.getElementById('root')
);

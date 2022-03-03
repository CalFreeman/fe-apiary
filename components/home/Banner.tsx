import React from "react";
import { APP_NAME } from "../../lib/utils/constant";


const Banner = () => (
  <div className="banner-container">

    <div className="banner">
        <h1 className="logo-font">{APP_NAME.toUpperCase()}</h1>
        <p>A Bee &amp; Honey Company</p>

    </div>

  </div>
);

export default Banner;
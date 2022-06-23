import React from "react";
import "./Banner.css";
import Artboard from "./Artboard.png";
import landingImg from "./landing page.png";

function Banner() {
  return (
    <>
      <div className="banner_component" id="Banner">
        <div className="Banner_text">
          <h1 className="text1">Shop Together</h1>
          <h2 className="text2">Save</h2>
          <h1 className="text3">Together</h1>
          <hr className="banner_hr" />
          <p>
            Now, get the best discounts on home essentials that get delivered to
            your doorstep in the shortest possible time frame.
          </p>
        </div>
        <div className="banner_image">
          <img className="banner_image1" src={landingImg} />
        </div>
      </div>
      <div className="mobile_banner_container">
        <div className="mobile_banner_image">
          <img className="mobile_banner_image1" src={landingImg} />
        </div>
        <div className="Banner_text">
          <h1 className="text1">Shop Together</h1>
          <h2 className="text2">Save</h2>
          <h1 className="text3">Together</h1>
          <hr className="banner_hr" />
          <p>
            Now, get the best discounts on home essentials that get delivered to
            your doorstep in the shortest possible time frame.
          </p>
        </div>
      </div>
    </>
  );
}

export default Banner;

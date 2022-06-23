import React from "react";
import "./Footer.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <div className="footer_component">
      <div className="footer_main">
        <h1 className="footer_heading">We would love to Connect with you!</h1>
        <hr className="footer_hr" />
        <div className="footer_icon">
          <a href="https://www.facebook.com/teambuy.co.in" target="_blank">
            <FacebookIcon className="icon1 footer_icon_element" />
          </a>
          <a href="https://instagram.com/teambuy.co.in?igshid=YmMYMTAZM2YE" target="_blank">
            <InstagramIcon className="icon2 footer_icon_element" />
          </a>
          <a href="https://twitter.com/Teambuy_Ecom3" target="_blank">
            <TwitterIcon className="icon3 footer_icon_element" />
          </a>
          <a href="https://www.linkedin.com/company/team-buy/?viewAsMember=true" target="_blank">
            <LinkedInIcon className="icon4 footer_icon_element" />
          </a>
        </div>
        <h3 className="footer_bottom">
          © 2022 D AND S INNOVATIVE RETAIL PRIVATE LIMITED
        </h3>
      </div>
    </div>
  );
}

export default Footer;

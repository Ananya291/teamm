import React from "react";
import "./About.css";

function About() {
  return (
    <div className="statsNew" id="About">
      <div className="StatisticsNew">
        <div className="StatisticsNew_left">
          <h1 className="StatisticsNew_heading">About Us</h1>
          <h3 className="StatisticsNew_subheading">
            Welcome to TeamBuy, an endeavour to make E-commerce more social,
            pocket friendly, fun,interactive and quick. TeamBuy’s AI-led product
            discovery and team formation enables you purchase in groups and
            hence let’s you avail highest discounts possible while giving you a
            shopping mall like experience all from the comfort of your home.
          </h3>
        </div>

        <div className="StatisticsNew_right">
          <div className="StatisticsNew_circles">
            <div className="StatisticsNew_circle1">
              <p className="circle_textt">
                <span className="numbers">12,000</span>
                <br />
                Happy
              </p>
              <h1 className="NumberOFPartners">Customers</h1>
            </div>
            <div className="StatisticsNew_circle2">
              <p className="circle_textt2">
                <span className="numbers">30,000</span>
                <br />
                Orders
              </p>
            </div>
          </div>
          <div className="StatisticsNew_circle3">
            <p className="circle_textt3">
              More than INR <br /> <span className="numbers">20 Lacs</span>{" "}
              saved by
            </p>
            <h1 className="NumberOfVolunteers">Customers</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

import React from "react";
import "./team.scss";
import { PageHeader } from "../../shared";
import stock from "../../assets/team/jara.gif";
import { Carousel } from "../../shared";

export const Team = () => {
  return (
    <div id="team">
      <PageHeader title="Team" />
      <main className="container">
        <div className="wrapper">
          <div className="carousel-header">
            <div className="img">
              <img src={stock} alt="Shell" />
            </div>
            <div className="content">
              <h3>Shell</h3>
              <p>
                Having been a key figure in the engineering phase of and , the
                two main institutions of club culture, the lights performer now
                leads his home club into the metaverse as a Creative Director.{" "}
              </p>
              <div className="socials">
                <span>
                  <a href="#">instagram</a>
                </span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <Carousel />
      </main>
    </div>
  );
};

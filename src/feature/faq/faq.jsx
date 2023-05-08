import React, { useState } from "react";
import "./faq.scss";
import { PageHeader } from "../../shared";
import { faqData } from "../../assets/data";
import discord from "../../assets/discrodBanner.png";
export const Faq = () => {
  const [active, setActive] = useState(-1);

  return (
    <div id="faq">
      <PageHeader title="FAQ'S" />
      <main className="container">
        <div className="layer">
          <div className="faq">
            <div className="wrapper">
              {faqData.map((el, key) => (
                <div key={el.id}>
                  <button onClick={(e) => setActive(key === active ? -1 : key)}>
                    <div
                      className={["action", active === key ? "focus" : ""].join(
                        " "
                      )}
                      alt="plus"
                    ></div>
                    {el.title}
                  </button>
                  <p
                    className={[
                      "show-box",
                      active === key ? "active" : "",
                    ].join(" ")}
                  >
                    {el.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <div className="discrod-banner">
        <img src={discord} alt="discord" />
        <div className="ds-wrapper">
          <div className="cubes">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="ds-contents">
            <h2>join discord community</h2>
            <p>join discord community</p>
          </div>
        </div>
        <div className="join-ds">
          <a href="#">
            {" "}
            <div className="cubes">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            join
          </a>
        </div>
      </div>
    </div>
  );
};

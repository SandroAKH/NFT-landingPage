import React, { useEffect, useState, useRef } from "react";
import { useParallax } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";

import Arrow from "../../assets/homepage/Arrow.png";
import { PageHeader } from "../../shared";
import { navigate } from "./../../helper";
import "./homepage.scss";

export const Homepage = () => {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  return (
    <div id="homepage">
      <PageHeader title="club" subTitle="Collection" />
      <main className="container">
        <div onClick={() => navigate("roadmap")} className="scrolldown-wrapper">
          <img src={Arrow} alt="Arrow" />
          <span>SCROLL DOWN</span>
        </div>
        <div className="model-wrapper"></div>
        <div className="navigation-wrapper"></div>
      </main>
      <Parallax
        translateY={["0px", "-220px", "easeInOut"]}
        // scaleY={offset > 200 && ([1, 0])}
        startScroll={10}
        endScroll={200}
      >
        <section ref={ref}>
          <div>
            <h3>Story</h3>
            <p>
              club has made a huge contribution to building a strong community
              in the electronic music scene by breaking down stereotypes and
              cultural barriers and bridging people of different backgrounds.
              From it’s world class sound system and two stage club, to its
              industrial exhibition art space, represents a vital part of the
              underground. For the first time ever, techno is stepping into the
              world of metaverse by launching its first collection of NFTs.
            </p>
          </div>
        </section>
      </Parallax>
      <div className="mobile">
        <div className="footer-social-wrap">
          <button data-title="Twitter">
            <span>
              <a href="#">Twitter</a>
            </span>
          </button>
          <button data-title="Instagram">
            <span>
              <a href="#">Instagram</a>
            </span>
          </button>
        </div>
      </div>
      <div className="mobile-story">
        <span></span>
        <div>
          <h3>Story</h3>
          <p>
            {" "}
            Ever since its first event in 2016, club has made a huge
            contribution to building a strong community in the electronic music
            scene by breaking down stereotypes and cultural barriers and
            bridging people of different backgrounds. From it’s world class
            sound system and two stage club, to its industrial exhibition art
            space, represents a vital part of the underground. For the first
            time ever, techno is stepping into the world of metaverse by
            launching its first collection of NFTs.
          </p>
        </div>
      </div>
    </div>
  );
};

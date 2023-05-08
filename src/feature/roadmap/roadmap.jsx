import React, { useEffect, useState, useRef } from "react";
import "./roadmap.scss";
import { RoadmapData } from "../../assets/data";
import { PageHeader } from "../../shared";
import Logo from "../../assets/roadmap/roadLogo.png";
import { SvgEl } from "./SvgEl";

const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

const classMappings = [
  { start: 1200, end: 1300, className: "num1" },
  { start: 1300, end: 1400, className: "num2" },
  { start: 1400, end: 1500, className: "num3" },
  { start: 1500, end: 1600, className: "num4" },
  { start: 1600, end: 1700, className: "num5" },
  { start: 1800, className: "khd" },
];
export const Roadmap = () => {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setOffset(window.pageYOffset);
      if (offset > 1200 && offset < 1300) {
        ref.current.classList.add("num1");
      } else if (offset < 1400 && offset > 1300) {
        ref.current.classList.add("num2");
      } else if (offset < 1500 && offset > 1400) {
        ref.current.classList.add("num3");
      } else if (offset < 1600 && offset > 1500) {
        ref.current.classList.add("num4");
      } else if (offset < 1700 && offset > 1600) {
        ref.current.classList.add("num5");
      } else if (offset > 1800) {
        ref.current.classList.add("khd");
        ref.current.classList.remove("meta");
      } else if (offset < 1200 || offset > 1800) {
        ref.current.classList.remove("num1");
        ref.current.classList.remove("num2");
        ref.current.classList.remove("num3");
        ref.current.classList.remove("num4");
        ref.current.classList.remove("num5");
        ref.current.classList.remove("khd");
        ref.current.classList.add("meta");
      }
    };

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  return (
    <div id="roadmap">
      <PageHeader title="Roadmap" />
      <div className="wrapper " ref={ref}>
        {RoadmapData.map((el, key) => (
          <div key={key} className="item">
            <div className="road-num">
              <span className="num">{el.num}.</span>
            </div>
            <div className="road-content">
              <div>
                <h3>{el.title}</h3>
                <p>{el.text} </p>
              </div>
            </div>
          </div>
        ))}
        <SvgEl />
      </div>
    </div>
  );
};

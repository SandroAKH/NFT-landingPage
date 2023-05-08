import React from "react";
import "./mobileFooter.scss";

export const MobileFooter = () => {
  return (
    <div id="mobileFooter">
      <ul>
        <li>
          <a href="#">Instagram</a>
        </li>
        <li>
          <a href="#">Twitter</a>
        </li>
        <li>
          <a href="#">Discord</a>
        </li>
      </ul>
      <span>
        Powered by
        <a href="#" className="studia">
          studia
        </a>
      </span>
    </div>
  );
};

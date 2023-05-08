import React from "react";
import { navigate } from "../../../helper";
import "./navigation.scss";

export const Navigation = ({ curentPage }) => {
  return (
    <nav id="navigation">
      <span onClick={() => navigate('homepage')} className={curentPage === 'homepage' ? "active" : ""}>Home</span>
      <span onClick={() => navigate('roadmap', 20)} className={curentPage === 'roadmap' ? "active" : ""}>Roadmap</span>
      <span onClick={() => navigate('team', 40)} className={curentPage === 'team' ? "active" : ""}>Team</span>
      <span onClick={() => navigate('meta', 225)} className={curentPage === 'meta' ? "active" : ""}>Metaverse</span>
      <span onClick={() => navigate('faq', 30)} className={curentPage === 'faq' ? "active" : ""}>FAQ’s</span>
    </nav>
  );
};

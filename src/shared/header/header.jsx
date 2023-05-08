import React from "react";
import "./header.scss";
import logo from "../../assets/header/khidilogo.png";
import logoGreen from "../../assets/header/khidilogo-green.png";
import { Link } from "react-router-dom";
import { Menu } from "../menu/menu";
import { navigate } from "../../helper";
export const Header = ({ curentPage }) => {
  const isMeta = curentPage === "meta";
  return (
    <header id="header" className={isMeta ? "meta" : ""}>
      <div className="menu-wrapper">
        <Menu
          curentPage={curentPage}
          pageWrapId={"page-wrap"}
          outerContainerId={"App"}
        />
      </div>
      <div className="menu">
        <div className="logo">
          <Link to="/" onClick={() => navigate("homepage")}>
            <img src={isMeta ? logoGreen : logo} alt=" NFT" />
          </Link>
        </div>
      </div>
      <div className="social-wrap">
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
        <a href="#">Discord</a>
      </div>
    </header>
  );
};

import React, { useState } from "react";
import { slide as Sidebar } from "react-burger-menu";
import "./menu.scss";
import Burger from "../../assets/header/menu.png";
import Close from "../../assets/header/close.png";
import logo from "../../assets/header/menuLogo.png";
import { navigate } from "../../helper";
export const Menu = (props) => {
  const [menuOpen, setMenuOpenState] = useState(false);
  function handleStateChange(state) {
    setMenuOpenState(state.isOpen);
  }
  function closeMenu() {
    setMenuOpenState(false);
  }
  return (
    <Sidebar
      isOpen={menuOpen}
      onStateChange={(state) => handleStateChange(state)}
      customBurgerIcon={<img src={Burger} alt="burger" />}
      customCrossIcon={<img src={Close} alt="close" />}
      className="burgerMenu"
      {...props}
    >
      <img src={logo} className="menu-logo" alt="Menulogo" />
      <div>
        <ul className="sidebar">
          <li
            className={props.curentPage === "homepage" ? "active" : ""}
            onClick={() => {
              navigate("homepage");
              closeMenu();
            }}
          >
            Home
            <div className="border"></div>
          </li>
          <li
            className={props.curentPage === "roadmap" ? "active" : ""}
            onClick={() => {
              navigate("roadmap");
              closeMenu();
            }}
          >
            Roadmap
            <div className="border"></div>
          </li>
          <li
            className={props.curentPage === "team" ? "active" : ""}
            onClick={() => {
              navigate("team");
              closeMenu();
            }}
          >
            Team
            <div className="border"></div>
          </li>
          <li
            className={props.curentPage === "meta" ? "active" : ""}
            onClick={() => {
              navigate("meta", 255);
              closeMenu();
            }}
          >
            Metaverse
            <div className="border"></div>
          </li>
          {/* <li>
          <Link to='/shop'>
            Shop
            <div className="border"></div>
          </Link>
        </li> */}
          <li
            className={props.curentPage === "faq" ? "active" : ""}
            onClick={() => {
              navigate("faq");
              closeMenu();
            }}
          >
            FAQ’s
            <div className="border"></div>
          </li>
        </ul>
        <div className="shareholders">
          <p></p>
        </div>
        <div className="menu-socials">
          {/* <button data-title="Facebook">
            <span>Facebook</span>
          </button> */}
        </div>
      </div>
    </Sidebar>
  );
};

import React from "react";
import Logo from "../Logo";
import Toggle from "../toggle";
import "./menu.scss";

function MenuTop({ handleClick, isAtive }) {
  return (
    <div className="navTop ">
      <div className="logo-container navTop__logo">
        <Logo />
      </div>
      <Toggle />
    </div>
  );
}

export default MenuTop;

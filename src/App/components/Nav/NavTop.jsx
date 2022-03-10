import React from "react";
import Logo from "../Logo";
import Toggle from "../toggle";

function NavTop({ handleClick, isAtive }) {
  return (
    <div className="navTop p-2-3">
      <div className="logo-container navTop__logo">
        <Logo />
      </div>

      <Toggle handleClick={handleClick} show={isAtive} />
    </div>
  );
}

export default NavTop;

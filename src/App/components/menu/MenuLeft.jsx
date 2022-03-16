import { Outlet } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import "./menu.scss";
import Logo from "../Logo";
import { NavBar } from "../Nav";
import { dataLeftMenu } from "../../data/menu.data";

function MenuLeft() {
  return (
    <div className="navBar ">
      <div className="navBar__left">
        <div className="logo-container">
          <Logo />
        </div>
        <NavBar data={dataLeftMenu} isVertical />
      </div>
      <div className="social flow flow--space-xl">
        <a
          href="https://www.linkedin.com/in/slim-bouchoucha/"
          target="_blank"
          rel="noreferrer"
          className="social__link"
        >
          <FaLinkedinIn className="social__icon" />
        </a>
        <a
          href="mailto:bouchouchaslim@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="social__link"
        >
          <FiMail className="social__icon" />
        </a>
      </div>
      <Outlet />
    </div>
  );
}

export default MenuLeft;

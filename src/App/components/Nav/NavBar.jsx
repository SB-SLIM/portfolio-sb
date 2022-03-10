import { Link, Outlet } from "react-router-dom";
import "./nav.scss";
import { FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { useState } from "react";
import clsx from "clsx";
import Logo from "../Logo";

function NavBar() {
  const [active, setActive] = useState("About");

  const handleClick = (e) => {
    const target = e.target.textContent;
    setActive(target);
  };

  return (
    <div className="navBar p-2-3">
      <div className="navBar__left">
        <div className="logo-container">
          <Logo />
        </div>
        <nav className="nav__container">
          <Link
            to="/"
            className={clsx(
              "nav__item",
              active === "About" && "nav__item--active"
            )}
            onClick={handleClick}
          >
            About
          </Link>
          <Link
            to="resume"
            className={clsx(
              "nav__item",
              active === "Resume" && "nav__item--active"
            )}
            onClick={handleClick}
          >
            Resume
          </Link>
        </nav>
      </div>
      <div className="social">
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

export default NavBar;

import clsx from "clsx";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import "./sidebar.scss";

function SideBar({ show, setIsActive }) {
  return (
    <div className={clsx("sideBar", show && "active")}>
      <Button
        styleProps="btn__icon p-2-3"
        handleClick={() => setIsActive(!show)}
      >
        <span className="btn-close" />
      </Button>
      <nav className="nav__container">
        {/* <Link
          to="/"
          className={clsx(
            "nav__item",
            active === "About" && "nav__item--active"
          )}
          onClick={handleClick}
        >
          About
        </Link> */}
      </nav>
    </div>
  );
}

export default SideBar;

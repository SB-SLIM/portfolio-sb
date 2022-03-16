import clsx from "clsx";
import { Link } from "react-router-dom";
import { useNavContext } from "../../context/nav.context";
import "./nav.scss";

function Nav({ data, classes, isVertical = false }) {
  const { activePage, setActivePage, setSideIsOpen, sideIsOpen } =
    useNavContext();

  const handleClick = (p) => {
    setActivePage(p);
    if (sideIsOpen) {
      setSideIsOpen(false);
    }
  };

  return (
    <nav className="flow flow--space-xl fs-600 underline-indicators fd--column nav__container">
      {data.map((p, index) => {
        
        return (
          <Link
            key={index}
            to={p === "Home" ? "" : p}
            className={clsx(
              "nav__item",
              activePage === p && "active",
              isVertical && "nav__item--vertical"
            )}
            onClick={() => handleClick(p)}
          >
            {p}
          </Link>
        );
      })}
    </nav>
  );
}

export default Nav;

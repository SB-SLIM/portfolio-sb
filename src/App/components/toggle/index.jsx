import clsx from "clsx";
import { useNavContext } from "../../context/nav.context";
import "./toggle.scss";

function Toggle({ classes }) {
  const { sideIsOpen, setSideIsOpen } = useNavContext();

  return (
    <div
      className={clsx(
        "toggle__container",
        sideIsOpen && "d-none",
        classes && `${classes}`
      )}
      onClick={() => setSideIsOpen(!sideIsOpen)}
    >
      <span className="toggle-btn" />
    </div>
  );
}

export default Toggle;

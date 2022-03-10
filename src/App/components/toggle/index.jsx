import clsx from "clsx";
import "./toggle.scss";

function Toggle({ handleClick, show }) {
  return (
    <div
      className={clsx("toggle__container", show && "d-none")}
      onClick={handleClick}
    >
      <span className="toggle-btn" />
    </div>
  );
}

export default Toggle;

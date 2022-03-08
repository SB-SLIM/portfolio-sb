import clsx from "clsx";
import "./toggle.scss";

function Toggle({ handleClick, show }) {
  return (
    <div className="toggle p-2-3">
      <div
        className={clsx("toggle__container", show && "d-none")}
        onClick={handleClick}
      >
        <span className="toggle-btn" />
      </div>
    </div>
  );
}

export default Toggle;

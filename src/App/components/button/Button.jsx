import clsx from "clsx";
import "./button.scss";

function Button({ styleProps: style, children, handleClick, ...rest }) {
  return (
    <button
      type="submit"
      onClick={handleClick}
      className={clsx("btn fs-300", style && `${style}`)}
    >
      {children}
    </button>
  );
}

export default Button;

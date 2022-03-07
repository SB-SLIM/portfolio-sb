import clsx from "clsx";
import "./heading.scss";

function Heading({ size, children, styleProps: style }) {
  if (size === "bg") {
    return <h1 className={clsx("h1", style && `${style}`)}>{children}</h1>;
  }
  if (size === "md") {
    return <h2 className={clsx("h2", style && `${style}`)}>{children}</h2>;
  }
  if (size === "sm") {
    return <h3 className={clsx("h3", style && `${style}`)}>{children}</h3>;
  }
}
Heading.prototype = {
  size: "sm" || "md" || "bg",
};
export default Heading;

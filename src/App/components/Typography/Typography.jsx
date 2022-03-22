import clsx from "clsx";
import "./typography.scss";

const variants = {
  H1: "h1",
  H2: "h2",
  H3: "h3",
  H4: "h4",
  H5: "h5",
  H6: "h6",
  H7: "p",
};

function Typography({ children, styleProps: styles, variant }) {
  switch (variant) {
    case variants.H1:
      return <h1 className={clsx(styles && `${styles}`)}>{children}</h1>;
    case variants.H2:
      return <h2 className={clsx(styles && `${styles}`)}>{children}</h2>;
    case variants.H3:
      return <h3 className={clsx(styles && `${styles}`)}>{children}</h3>;
    case variants.H4:
      return <h4 className={clsx(styles && `${styles}`)}>{children}</h4>;
    case variants.H5:
      return <h5 className={clsx(styles && `${styles}`)}>{children}</h5>;
    case variants.H6:
      return <h6 className={clsx(styles && `${styles}`)}>{children}</h6>;
    default:
      return <p className={clsx(styles && `${styles}`)}>{children}</p>;
  }
}

export default Typography;

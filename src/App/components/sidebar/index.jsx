import clsx from "clsx";
import { useNavContext } from "../../context/nav.context";
import { dataSideBarMenu } from "../../data/menu.data";
import Button from "../button/Button";
import { NavBar } from "../Nav";
import "./sidebar.scss";

function SideBar() {
  const { sideIsOpen, setSideIsOpen } = useNavContext();

  return (
    <div className={clsx("sideBar", sideIsOpen && "active")}>
      <Button
        styleProps="btn__icon p-2-3"
        handleClick={() => setSideIsOpen(!sideIsOpen)}
      >
        <span className="btn-close" />
      </Button>
      <NavBar data={dataSideBarMenu} />
    </div>
  );
}

export default SideBar;

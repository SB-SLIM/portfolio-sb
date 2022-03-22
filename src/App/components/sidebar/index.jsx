import clsx from "clsx";
import { useNavContext } from "../../context/nav.context";
import { dataSideBarMenu } from "../../data/menu.data";
import Button from "../button/Button";
import { NavBar } from "../Nav";
import "./sidebar.scss";

function SideBar() {
  const { sideIsOpen, setSideIsOpen } = useNavContext();

  return (
    <div className={clsx("sideBar", sideIsOpen && "show")}>
      <div className="sideBar__heading">
        <Button
          styleProps="btn__icon"
          handleClick={() => setSideIsOpen(!sideIsOpen)}
        >
          <span className="btn-close" />
        </Button>
      </div>
      <div className="sideBar__body">
        <NavBar data={dataSideBarMenu} />
      </div>
    </div>
  );
}

export default SideBar;

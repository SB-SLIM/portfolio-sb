import Button from "../button/Button";
import "./sidebar.scss";

function SideBar({ show, setIsActive }) {
  return (
    <div className="sideBar">
      <Button
        styleProps="btn__icon p-2-3"
        handleClick={() => setIsActive(!show)}
      >
        <span className="btn-close" />
      </Button>
      <nav>
        <ul>
          <li>1</li>
          <li>Z</li>
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;

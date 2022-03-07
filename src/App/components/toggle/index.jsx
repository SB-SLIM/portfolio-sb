import "./toggle.scss";

function Toggle({ handleClick }) {
  return (
    <div className="toggle__container" onClick={handleClick}>
      <span className="toggle-btn" />
    </div>
  );
}

export default Toggle;

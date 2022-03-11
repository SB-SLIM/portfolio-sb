import { Link } from "react-router-dom";
import { Heading } from "../../components";
import "./notFound.scss";

function NotFound() {
  return (
    <div className="notFound">
      <div className="notFound__title">
        <Heading size="bg">that page doesn't exist!</Heading>
        <p>Sorry, the page you were looking for could not be found.</p>
      </div>
      <div className="notFound__body">
        <p>
          You can return to ou <Link to="About">home page</Link>
        </p>
      </div>
    </div>
  );
}

export default NotFound;

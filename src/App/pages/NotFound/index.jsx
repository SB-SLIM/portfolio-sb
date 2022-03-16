import { Link } from "react-router-dom";
import { Typography } from "../../components";
import "./notFound.scss";

function NotFound() {
  return (
    <main className="notFound">
      <div className="notFound__title">
        <Typography variant="h1">that page doesn't exist!</Typography>
        <Typography>
          Sorry, the page you were looking for could not be found.
        </Typography>
      </div>
      <div className="notFound__body">
        <Typography>
          You can return to our <Link to="About">home page</Link>
        </Typography>
      </div>
    </main>
  );
}

export default NotFound;

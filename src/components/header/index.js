import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  return (
    <div className="headerBackground mb-2 row">
      <div className="col-4">
        <Link to="/" className="btn btn-success m-1 my-2">
          Home
        </Link>
        <Link to="/history" className="btn btn-success m-1 my-2">
          History
        </Link>
      </div>
      <h1 className="col-4 text-center">Hacker News</h1>
    </div>
  );
}

export default Header;

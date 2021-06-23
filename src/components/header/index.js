import { Link } from "react-router-dom";
import logo from "../../images/logo.png"
import "./style.css";

function Header() {
  return (
    <div className="headerBackground mb-2 row">
      <div className="col-4">
        <Link to="/" className="btn btn-danger m-1 my-2">
          Home
        </Link>
        <Link to="/history" className="btn btn-danger m-1 my-2">
          History
        </Link>
      </div>
      <div className="col-4 text-center">
             <img className="logo" src={logo} alt="RTS Logo" />
        </div>   </div>
  );
}

export default Header;

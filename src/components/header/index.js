import { Link } from "react-router-dom";
import "./style.css"

function Header() {
  return (
    <div className="headerBackground mb-2">
      <Link to="/home" className="btn m-1">Home</Link>
      <Link to="/history" className="btn m-1">History</Link>
    </div>
  );
}

export default Header;

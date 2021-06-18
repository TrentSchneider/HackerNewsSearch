import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/history">History</Link>
    </div>
  );
}

export default Header;

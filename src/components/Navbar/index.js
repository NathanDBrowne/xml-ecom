import "./styles.css";

import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ LogInOut }) {
  const navigate = useNavigate();

  const Navigation = () => (
    <div>
      <nav style={{ display: "flex" }}>
        <Link className="NavLink" to="/">
          Home
        </Link>
        <Link className="NavLink" to="/auth/login">
          Login
        </Link>
        <Link className="NavLink" to="/products">
          Products
        </Link>
        <a className="NavLink" href="report.html">
          Report
        </a>
      </nav>
    </div>
  );

  return (
    <div className="Navbar">
      <Link className="Logo" to="/">
        <h1>XML ECOM</h1>
      </Link>
      <Navigation />
    </div>
  );
}

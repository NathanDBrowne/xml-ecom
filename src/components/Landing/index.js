import "./styles.css";

import { Link } from "react-router-dom";
import EcomSlides from "../Slideshow";

const Landing = () => {
  return (
    <>
      <div className="LandingContainer">
        <h1>Welcome</h1>
        <h2>Log in to view our our products</h2>
        <Navigation />
        <EcomSlides />
      </div>
    </>
  );
};

const Navigation = () => (
  <nav>
    <Link
      style={{ textDecoration: "none", fontWeight: 500, color: "#000" }}
      to="/auth/login"
    >
      Log in{"-->"}
    </Link>
  </nav>
);

export default Landing;

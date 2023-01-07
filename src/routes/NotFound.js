import { Link } from "react-router-dom";
import React from "react";

const NotFound = () => {
  return (
    <>
      <h1>404 - How did you even get here?</h1>
      <h2>Do kindly let me know if I've made a mistake somewhere.</h2>
      <h3>Maybe you haven't logged in?</h3>
      <Link to="/">Back to reality</Link>
    </>
  );
};

export default NotFound;

import "./styles.css";

import { Link, useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { useEffect, useState } from "react";

const TextInput = ({ label }) => {
  // A text entry row - just needs a label
  const [inputValue, setInputValue] = useState("");

  // when it changes - update the view
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // return a nicely formatted and styled row
  return (
    <nav className="EntryRow">
      <h3>{label}</h3>
      <TextField
        label={label}
        onChange={handleInputChange}
        value={inputValue}
        // prevent page refresh on enter key press
        onKeyPress={(e) => {
          e.key === "Enter" && e.preventDefault();
        }}
      />
    </nav>
  );
};

export default function LogIn() {
  const navigate = useNavigate();

  useEffect(() => {}, []);

  return (
    <div className="NewRuleForm">
      <h1>Good to see you!</h1>
      <form className="RulebookForm">
        <TextInput label="Email" />
        <TextInput label="Password" />
        <div className="ButtonOptions">
          <Link to="/auth/signup">
            <button className="SubmitButton" style={{ background: "#999" }}>
              Create account
            </button>
          </Link>
          <button type="submit" className="SubmitButton">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
}

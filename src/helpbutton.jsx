import React from "react";
import { Link } from "react-router-dom";

const HelpBtn = (props) => {
  return (
    <Link
      style={{ textDecoration: "none", color: "black" }}
      to={props.help ? "/" : "/help"}
      onClick={() => props.handleClick()}
      className="helpbutton"
    >
      {props.help ? "Return" : "Help"}
    </Link>
  );
};
export default HelpBtn;

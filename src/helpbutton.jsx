import React from "react";
import { Link } from "react-router-dom";

const HelpBtn = (props) => {
  return (
    <Link
      style={{ textDecoration: "none", color: "black" }}
      to={props.help ? "/" : "/help"}
    >
      <div onClick={() => props.handleClick()} className="helptext">
        {props.help ? "Return" : "Help"}
      </div>
    </Link>
  );
};
export default HelpBtn;

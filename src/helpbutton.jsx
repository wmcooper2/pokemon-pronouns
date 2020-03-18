import React from "react";
import { Link } from "react-router-dom";

const HelpBtn = props => {
  return (
    <div className="help">
      {props.help ? (
        <Link style={{ textDecoration: "none", color: "black" }} to="/">
          <div onClick={() => props.handleClick()} className="helptext">
            Return
          </div>
        </Link>
      ) : (
        <Link style={{ textDecoration: "none", color: "black" }} to="/help">
          <div onClick={() => props.handleClick()} className="helptext">
            Help
          </div>
        </Link>
      )}
    </div>
  );
};
export default HelpBtn;

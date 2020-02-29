import React from "react";

const HelpOverlay = props => {
  const { overlay, hideOverlay } = props;
  const helpStyles = { display: overlay };
  console.log("helpStyles: ", helpStyles);
  return (
    <div onClick={() => hideOverlay()} className="overlay" styles={helpStyles}>
      <div className="overlayexplanation">Some explanation</div>
    </div>
  );
};

export { HelpOverlay };

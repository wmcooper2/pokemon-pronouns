import React from "react";

const HelpInstructions = props => {
  const { help } = props;
  let textStyles = { fontSize: "3em" };
  if (help) {
    textStyles = { fontSize: "1em" };
  }
  return (
    <div className="upperleft">
      <div className="uppersentence" style={textStyles}>
        <ol>
          <div className="upperhelp">
            <h1 className="upperlefthelp">Above Sentence</h1>
            <div className="upperrighthelp">
              <li>
                Click&nbsp;<span className="helpverb">verb</span>&nbsp;and&nbsp;
                <span className="helpobject">object</span>&nbsp;to cycle them.
              </li>
              <li>
                Click the buttons on the right to change&nbsp;
                <span className="helpsubject">subject</span>&nbsp;.
              </li>
            </div>
          </div>
          <div className="lowerhelp">
            <h1 className="lowerlefthelp">Below Sentence</h1>
            <div className="lowerrighthelp">
              <li>
                The&nbsp;
                <span className="helpsubject">subject</span>&nbsp;and&nbsp;
                <span className="helpverb">verb</span>&nbsp;only go to the
                correct answer when clicked.
              </li>
              <li>
                The&nbsp;<span className="helpobject">object</span>&nbsp; cycles
                through a few options.
              </li>
              <li>
                It is up to the teacher to know the correct use of the &nbsp;
                <span className="helpobject">object</span>&nbsp;.
              </li>
            </div>
          </div>
        </ol>
      </div>
    </div>
  );
};

export { HelpInstructions };

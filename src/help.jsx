import React from "react";
import { EnglishInst, JapaneseInst } from "./instructions";

const HelpInstructions = (props) => {
  const { help, English, toggleLanguage } = props;
  // console.log("English? ", English);
  let textStyles = { fontSize: "3em" };
  if (help) {
    textStyles = { fontSize: "1em" };
  }

  let instructions = {};
  if (English) {
    instructions = EnglishInst;
  } else {
    instructions = JapaneseInst;
  }

  return (
    <div className="instructions">
      <div className="uppersentence" style={textStyles}>
        <ol>
          <div className="upperhelp">
            <h1>{instructions.above}</h1>
            <div className="upperrighthelp">
              <li>{instructions.one}</li>
              <li>{instructions.two}</li>
            </div>
          </div>
          <div className="lowerhelp">
            <h1 className="lowerlefthelp">{instructions.below}</h1>
            <div className="lowerrighthelp">
              <li>{instructions.three}</li>
              <li>{instructions.four}</li>
              <li>{instructions.five}</li>
            </div>
          </div>
        </ol>
      </div>
      <button className="language-button" onClick={() => toggleLanguage()}>
        {English ? "日本語" : "English"}
      </button>
    </div>
  );
};

export { HelpInstructions };

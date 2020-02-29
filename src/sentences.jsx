import React from "react";

const UpperSentence = props => {
  const {
    changeObject,
    changeVerb,
    verbIndex,
    objectIndex,
    verbChoices,
    objectPlurals
  } = props;
  return (
    <React.Fragment>
      <div className="verb word example" onClick={() => changeVerb()}>
        {verbChoices[verbIndex]}
      </div>
      <div className="object word example" onClick={() => changeObject()}>
        {Object.keys(objectPlurals)[objectIndex]}
      </div>
    </React.Fragment>
  );
};

const LowerSentence = props => {
  const {
    subject,
    lowerSubject,
    lowerVerb,
    lowerObject,
    changeVerbForm,
    changeObjectForm,
    capitalize
  } = props;
  //   console.log("LowerSentence: lowerVerb", lowerVerb);
  return (
    <React.Fragment>
      <div
        className="lowersentence word subject"
        onClick={() => capitalize(subject.subject)}
      >
        {lowerSubject}
      </div>
      <div className="lowersentence word verb" onClick={() => changeVerbForm()}>
        {lowerVerb}
      </div>
      <div
        className="lowersentence word object"
        onClick={() => changeObjectForm()}
      >
        {lowerObject}
      </div>
    </React.Fragment>
  );
};

export { UpperSentence, LowerSentence };

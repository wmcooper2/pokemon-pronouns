import React from "react";

const ExampleSentence = (props) => {
  const {
    changeObject,
    changeVerb,
    verbIndex,
    objectIndex,
    verbChoices,
    objectPlurals,
  } = props;

  return (
    <React.Fragment>
      <span>+</span>
      <div className="word verb" onClick={() => changeVerb()}>
        {verbChoices[verbIndex]}
      </div>
      <span>+</span>
      <div className="word object" onClick={() => changeObject()}>
        {Object.keys(objectPlurals)[objectIndex]}
      </div>
    </React.Fragment>
  );
};

const CorrectSentence = (props) => {
  const {
    subject,
    lowerSubject,
    lowerVerb,
    lowerObject,
    changeVerbForm,
    changeObjectForm,
    capitalize,
  } = props;

  return (
    <div className="dialog">
      <div className="word subject" onClick={() => capitalize(subject.subject)}>
        {lowerSubject}
      </div>
      <div className="word verb" onClick={() => changeVerbForm()}>
        {lowerVerb}
      </div>
      <div className="word object" onClick={() => changeObjectForm()}>
        {lowerObject}
      </div>
    </div>
  );
};

export { ExampleSentence, CorrectSentence };

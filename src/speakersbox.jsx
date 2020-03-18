import React from "react";
const SpeakersBox = props => {
  return (
    <React.Fragment>
      <img className="speaker" src={props.speaker} alt="speaker"></img>
      <img
        src="https://s3-ap-northeast-1.amazonaws.com/wmcooper2.com/pokemon-pronouns/speechbubble.png"
        className="speechbubble"
        alt="speech bubble"
      ></img>
      <img
        className="listener"
        src="https://s3-ap-northeast-1.amazonaws.com/wmcooper2.com/pokemon-pronouns/charizardsface.png"
        alt="listener"
      ></img>
    </React.Fragment>
  );
};

export default SpeakersBox;

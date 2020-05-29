import React from "react";
const Characters = (props) => {
  return (
    <div className="characters">
      <img className="pikachu" src={props.speaker} alt="pikachu"></img>
      <img
        src="https://s3-ap-northeast-1.amazonaws.com/wmcooper2.com/pokemon-pronouns/speechbubble.png"
        className="speechbubble"
        alt="speech bubble"
      ></img>
      <img
        className="charizard"
        src="https://s3-ap-northeast-1.amazonaws.com/wmcooper2.com/pokemon-pronouns/charizardsface.png"
        alt="charizard"
      ></img>
    </div>
  );
};

export default Characters;

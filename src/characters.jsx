import React from "react";
const Characters = (props) => {
  return (
    <div className="characters">
      <img className="pikachu" src={process.env.PUBLIC_URL + props.speaker} alt="pikachu"></img>
      <img
        src={process.env.PUBLIC_URL + "/speechbubble.png"}
        className="speechbubble"
        alt="speech bubble"
      ></img>
      <img
        className="charizard"
        src={process.env.PUBLIC_URL + "/charizardsface.png"}
        alt="charizard"
      ></img>
    </div>
  );
};

export default Characters;

import React from "react";

//there is a 2nd person plural, but I will not include it yet.
const pronouns = [
  {
    subject: "I",
    object: "me",
    possAdj: "my",
    possPro: "mine",
    reflexive: "myself",
    image:
      "https://s3-ap-northeast-1.amazonaws.com/wmcooper2.com/pokemon-pronouns/pikachu.png",
  },
  {
    subject: "you",
    object: "you",
    possAdj: "your",
    possPro: "yours",
    reflexive: "yourself",
    image:
      "https://s3-ap-northeast-1.amazonaws.com/wmcooper2.com/pokemon-pronouns/charizard.png",
  },
  {
    subject: "he",
    object: "him",
    possAdj: "his",
    possPro: "his",
    reflexive: "himself",
    image:
      "https://s3-ap-northeast-1.amazonaws.com/wmcooper2.com/pokemon-pronouns/ash.jpg",
  },
  {
    subject: "she",
    object: "her",
    possAdj: "her",
    possPro: "hers",
    reflexive: "herself",
    image:
      "https://s3-ap-northeast-1.amazonaws.com/wmcooper2.com/pokemon-pronouns/misty.png",
  },
  {
    subject: "it",
    object: "it",
    possAdj: "its",
    possPro: null,
    reflexive: "itself",
    image:
      "https://s3-ap-northeast-1.amazonaws.com/wmcooper2.com/pokemon-pronouns/pokeball.png",
  },
  {
    subject: "we",
    object: "us",
    possAdj: "our",
    possPro: "ours",
    reflexive: "ourselves",
    image:
      "https://s3-ap-northeast-1.amazonaws.com/wmcooper2.com/pokemon-pronouns/we.jpg",
  },
  {
    subject: "they",
    object: "them",
    possAdj: "their",
    possPro: "theirs",
    reflexive: "themselves",
    image:
      "https://s3-ap-northeast-1.amazonaws.com/wmcooper2.com/pokemon-pronouns/they.png",
  },
];

const PronounBtns = (props) => {
  let buttons = [];
  pronouns.forEach((item) => {
    buttons.push(
      <React.Fragment>
        <div className="pronoun" onClick={() => props.changePronoun(item)}>
          <img className="image" src={item.image} alt="pronoun"></img>
          <span>{item.subject}</span>
        </div>
      </React.Fragment>
    );
  });
  return buttons;
};

export { pronouns, PronounBtns };

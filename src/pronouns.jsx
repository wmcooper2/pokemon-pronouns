import React from "react";

//there is a 2nd person plural, but I will not include it yet.
const pronouns = [
  {
    subject: "I",
    object: "me",
    possAdj: "my",
    possPro: "mine",
    reflexive: "myself",
    image: process.env.PUBLIC_URL + "/pikachu.png",
  },

  {
    subject: "you",
    object: "you",
    possAdj: "your",
    possPro: "yours",
    reflexive: "yourself",
    image: process.env.PUBLIC_URL + "/charizard.png",
  },

  {
    subject: "he",
    object: "him",
    possAdj: "his",
    possPro: "his",
    reflexive: "himself",
    image: process.env.PUBLIC_URL + "/ash.png",
  },

  {
    subject: "she",
    object: "her",
    possAdj: "her",
    possPro: "hers",
    reflexive: "herself",
    image: process.env.PUBLIC_URL + "/misty.png",
  },

  {
    subject: "it",
    object: "it",
    possAdj: "its",
    possPro: null,
    reflexive: "itself",
    image: process.env.PUBLIC_URL + "/pokeball.png",
  },

  {
    subject: "we",
    object: "us",
    possAdj: "our",
    possPro: "ours",
    reflexive: "ourselves",
    image: process.env.PUBLIC_URL + "/we.png",
  },

  {
    subject: "they",
    object: "them",
    possAdj: "their",
    possPro: "theirs",
    reflexive: "themselves",
    image: process.env.PUBLIC_URL+"/they.png",
  },
];

const PronounBtns = (props) => {
  let buttons = [];
  pronouns.forEach((item) => {
    buttons.push(
      <React.Fragment>
        <div className="pronoun" onClick={() => props.changePronoun(item)}>
          <img src={item.image} alt="pronoun"></img>
          <span>{item.subject}</span>
        </div>
      </React.Fragment>
    );
  });
  return buttons;
};

export { pronouns, PronounBtns };

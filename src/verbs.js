const verbs = {
  like: {
    I: "like",
    you: "like",
    he: "likes",
    she: "likes",
    it: "likes",
    we: "like",
    they: "like"
  },

  eat: {
    I: "eat",
    you: "eat",
    he: "eats",
    she: "eats",
    it: "eats",
    we: "eat",
    they: "eat"
  },

  play: {
    I: "play",
    you: "play",
    he: "plays",
    she: "plays",
    it: "plays",
    we: "play",
    they: "play"
  },

  speak: {
    I: "speak",
    you: "speak",
    he: "speaks",
    she: "speaks",
    it: "speaks",
    we: "speak",
    they: "speak"
  },

  have: {
    I: "have",
    you: "have",
    he: "has",
    she: "has",
    it: "has",
    we: "have",
    they: "have"
  },

  be: {
    I: "am",
    you: "are",
    he: "is",
    she: "is",
    it: "is",
    we: "are",
    they: "are"
  }
};

//verb choices: like, eat, play, speak, have, is
const verbChoices = Object.keys(verbs);

export { verbs, verbChoices };

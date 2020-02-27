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
  }
};

const verbChoices = Object.keys(verbs);

export { verbs, verbChoices };

export const locations = {
  intro: {
    description: "Hello there ${name}, your pronouns are ${pronouns}.",
    interactables: {
      choice1: {
        text: "Walk towards the Supermart",
        successChance: 1,
        successText: "You approach the supermart hesitantly.",
        successTeleport: "supermart_outside",
      },
    },
  },
  lost: {
    description:
      "You're in a place. Nobody really knows where. Let's go back to the intro?",
    interactables: {
      return: {
        text: "Take me back",
        successChance: 1,
        successText: "Taking you back to the intro...",
        successTeleport: "intro",
      },
    },
  },
  supermart_outside: {
    description: "You are outside a supermarket. It is garbage.",
    interactables: {
      choice1: {
        text: "Go inside the Supermart",
        successChance: 1,
        successText: "You enter the supermart swiftly.",
        successTeleport: "supermart_inside",
      },
      nothing: {
        text: "Do nothing",
        successChance: 1,
        successText: "You do nothing. Succesfully.",
        successTeleport: "",
      },
    },
  },
  supermart_inside: {
    description: "You are inside the supermarket. It is cool.",
    interactables: {
      outside: {
        text: "Go outside",
        successChance: 1,
        successText: "You exit the supermart",
        successTeleport: "supermart_outside",
      },
      nothing: {
        text: "Do nothing again",
        successChance: 1,
        successText: "You do nothing again. Succesfully.",
        successTeleport: "",
      },
    },
  },
};

export const locations = {
  intro: {
    description:
      "Hello ${name}, welcome to BGJ2024! This game is about heisting resources to aid your local community and escape poverty. You will face many challenges and commit many crimes. When you're ready, head to your base and start your mischief. Are you ready?",
    interactables: {
      base: {
        text: "Yes, take me to my base!",
        successChance: 1,
        successText:
          "You arrive at your base. It's nothing incredible, but it will have to do for now.",
        successTeleport: "base",
      },
      coward: {
        text: "No, I'm a little scared...",
        successChance: 1,
        successText:
          "That's okay, we all can be sometimes. Take a deep breather, relax and start back at the beginning.",
        successTeleport: "",
      },
    },
  },
  base: {
    description: "Your base is built around an abandoned warehouse.",
    interactables: {
      return: {
        text: "Go to the supermart",
        successChance: 1,
        successText: "",
        successTeleport: "supermart_outside",
      },
    },
  },
  lost: {
    description: "You're lost, probably due to a developer oversight.",
    interactables: {
      return: {
        text: "Go back to your base",
        successChance: 1,
        successText: "",
        successTeleport: "base",
      },
    },
  },
  supermart_outside: {
    description: "You are outside a supermarket. It is garbage.",
    interactables: {
      choice1: {
        text: "Go inside the Supermart",
        successChance: 1,
        successText: "",
        successTeleport: "supermart_inside",
      },
      nothing: {
        text: "Do nothing",
        successChance: 1,
        successText: "You do nothing again. Succesfully.",
        successTeleport: "",
      },
      nothing: {
        text: "Return to base",
        successChance: 1,
        successText: "",
        successTeleport: "base",
      },
    },
  },
  supermart_inside: {
    description: "You are inside the supermarket. It is cool.",
    interactables: {
      outside: {
        text: "Go outside",
        successChance: 1,
        successText: "",
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

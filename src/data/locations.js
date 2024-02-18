export const locations = {
  intro: {
    description:
      "Hello ${name}, welcome to BGJ2024! This game is about heisting resources to aid your local community and escape poverty. You will face many challenges and commit many crimes. When you're ready, head to your base and start your mischief. Are you ready?",
    freezeTime: true,
    interactables: {
      base: {
        text: "Yes, take me to my base!",
        successChance: 1,
        onSuccess: {
          text: "You arrive at your base. It's nothing incredible, but it will have to do for now.",
          teleport: "base",
        },
      },
      coward: {
        text: "No, I'm a little scared...",
        successChance: 1,
        onSuccess: {
          text: "That's okay, we all can be sometimes. Take a deep breather, relax and start back at the beginning.",
          teleport: "",
        },
      },
    },
  },
  base: {
    description: "Your base is built around an abandoned warehouse.",
    freezeTime: true,
    interactables: {
      return: {
        text: "Go to the supermart",
        successChance: 1,
        onSuccess: {
          text: "",
          teleport: "supermart_outside",
        },
      },
    },
  },
  supermart_outside: {
    description: "You are outside a supermarket. It is garbage.",
    interactables: {
      choice1: {
        text: "Go inside the Supermart",
        successChance: 1,
        onSuccess: {
          text: "",
          teleport: "supermart_inside",
          timeUse: 60,
        },
      },
      nothing: {
        text: "Do nothing",
        successChance: 1,
        onSuccess: {
          text: "You do nothing again. Succesfully.",
          teleport: "",
          timeUse: 30,
        },
      },
      return: {
        text: "Return to base",
        successChance: 1,
        onSuccess: {
          text: "",
          teleport: "base",
        },
      },
    },
  },
  supermart_inside: {
    description: "You are inside the supermarket. It is cool.",
    interactables: {
      outside: {
        text: "Go outside",
        successChance: 1,
        onSuccess: {
          text: "You exit the supermart",
          teleport: "supermart_outside",
          timeUse: 60,
        },
      },
      nothing: {
        text: "Do nothing again",
        successChance: 1,
        onSuccess: {
          text: "You do nothing again. Succesfully.",
          teleport: "",
          timeUse: 30,
        },
      },
    },
  },
};

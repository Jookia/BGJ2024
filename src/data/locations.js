export const locations = {
  intro: {
    description:
      "Hello ${name}, welcome to BGJ2024! This game is about heisting resources to aid your local community and escape poverty. You will face many challenges and commit many crimes. When you're ready, head to your base and start your mischief. Are you ready?",
    freezeTime: true,
    interactables: [
      {
        text: "Yes, take me to my base!",
        successChance: 1,
        success: {
          text: "You arrive at your base. It's nothing incredible, but it will have to do for now.",
          teleport: "base",
        },
      },
      {
        text: "No, I'm a little scared...",
        successChance: 1,
        success: {
          text: "That's okay, we all can be sometimes. Take a deep breather, relax and start back at the beginning.",
        },
      },
    ],
  },
  base: {
    description: "Your base is built around an abandoned warehouse.",
    freezeTime: true,
    interactables: [
      {
        text: "Go to the supermart",
        successChance: 1,
        success: {
          text: "You rush to the supermart.",
          teleport: "supermart_outside",
        },
      },
    ],
  },
  supermart_outside: {
    description: "You are outside a supermarket. It is garbage.",
    interactables: [
      {
        text: "Go inside the Supermart",
        successChance: 1,
        success: {
          text: "You sneak past a security officer in to the Supermart.",
          teleport: "supermart_inside",
          timeUse: 60,
        },
      },
      {
        text: "Do nothing",
        successChance: 0.5,
        success: {
          text: "You do nothing succesfully.",
          timeUse: 30,
        },
        failure: {
          text: "You try to do nothing but fail!",
          timeUse: 100,
        },
      },
      {
        text: "Return to base",
        successChance: 1,
        success: {
          text: "You bail and head back to your base.",
          teleport: "base",
        },
      },
    ],
  },
  supermart_inside: {
    description: "You are inside the supermarket. It is cool.",
    interactables: [
      {
        text: "Go outside",
        successChance: 1,
        success: {
          text: "You exit the supermart",
          teleport: "supermart_outside",
          timeUse: 60,
        },
      },
      {
        text: "Do nothing again",
        successChance: 1,
        success: {
          text: "You do nothing again. Succesfully.",
          timeUse: 30,
        },
      },
    ],
  },
};

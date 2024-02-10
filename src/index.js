/**
 * @deprecated
 * Keeping this file for now, for reference regarding ARIA.
 */

// License: MIT

// GUI CODE BEGIN

// Working platforms:
// Orca+Firefox
// NVDA+Edge
// NVDA+Firefox
// NVDA+Chrome
// Broken platforms:
// Orca+Chromium: role=log speaks wrong (tested 2024-02-07)
// Narrator+Anything: role=log doesn't speak (tested 2024-02-07)
// Misc Notes:
// - aria-atomic="true" causes duplicate reads in Orca+Firefox
// - aria-live on by default causes duplicate reads on page load

// Sets aria-busy: Use this whenever you're changing game contents
function outputBusy(isBusy) {
  const output = document.querySelector("#game-output");
  output.ariaBusy = isBusy;
}

// Sets aria-live: Use this at least once on the first contents change
function outputLive() {
  const output = document.querySelector("#game-output");
  output.ariaLive = "polite";
}

// Clears the game output
function outputClear() {
  const output = document.querySelector("#game-output");
  while (output.firstChild) {
    output.removeChild(output.firstChild);
  }
}

// Adds a paragraph of text to the game output
function outputText(text) {
  const output = document.querySelector("#game-output");
  const node = document.createTextNode(text);
  const paragraph = document.createElement("p");
  paragraph.appendChild(node);
  output.appendChild(paragraph);
  paragraph.focus();
}

// Adds a list of choices to the game output
// Input is an array of [title, ID] pairs
// Example: outputChoices([["Hello world", "hello"], ["Goodnight world", "bye"]])
function outputChoices(choices) {
  const output = document.querySelector("#game-output");
  const paragraph = document.createElement("p");

  choices.forEach((choice) => {
    const choiceName = choice[0];
    const choiceId = choice[1];

    const title = document.createTextNode(choiceName);
    const button = document.createElement("button");
    button.dataset.choiceId = choiceId;
    button.addEventListener("click", handleChoiceClick);
    button.appendChild(title);
    paragraph.appendChild(button);
  });

  output.appendChild(paragraph);
}

// GUI CODE END

// GAME CODE BEGIN

const locations = {
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

let user = {
  name: "Peter",
  pronouns: "they/them",
  location: "supermart_outside",
};

function doChoice(choiceId) {
  const choice = locations[user.location].interactables[choiceId];
  outputText(choice.successText);
  if (choice.successTeleport !== "") {
    user.location = choice.successTeleport;
  }
}

function showLocation() {
  const location = locations[user.location];
  outputText(location.description);
  let choices = [];
  Object.entries(location.interactables).forEach(([key, value]) => {
    choices.push([value.text, key]);
  });
  outputChoices(choices);
}

function handleChoiceClick(event) {
  const choiceId = event.target.dataset.choiceId;
  outputBusy(true);
  outputLive();
  outputClear();
  doChoice(choiceId);
  showLocation();
  outputBusy(false);
}

addEventListener("load", (event) => {
  outputBusy(true);
  outputLive();
  outputClear();
  showLocation();
  outputBusy(false);
});

// GAME CODE END

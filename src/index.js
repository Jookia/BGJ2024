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
// - aria-polite on by default causes duplicate reads on page load

import parse from "./helpers/parseText";
import text from "./text.json";

// Sets aria-busy: Use this whenever you're changing game contents
function outputBusy(isBusy) {
  const output = document.querySelector("#game-output");
  output.ariaBusy = isBusy;
}

// Sets aria-live: Use this at least once on the first contents change
function outputLive() {
  const output = document.querySelector("#game-output");
  output.setAttribute("aria-live", "polite");
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
  const para = document.createElement("p");
  para.appendChild(node);
  output.appendChild(para);
  para.focus();
}

// Adds a list of choices to the game output
// Input is an array of [title, ID] pairs
// Example: outputChoices([["Hello world", "hello"], ["Goodnight world", "bye"]])
function outputChoices(choices) {
  const output = document.querySelector("#game-output");
  const ol = document.createElement("ol");

  choices.forEach((choice) => {
    const choiceName = choice[0];
    const choiceId = choice[1];

    const title = document.createTextNode(choiceName);
    const a = document.createElement("a");
    a.setAttribute("href", "#");
    a.addEventListener("click", handleChoiceClick);
    a.appendChild(title);

    const li = document.createElement("li");
    li.appendChild(a);
    ol.appendChild(li);
  });

  const para = document.createElement("p");
  para.appendChild(ol);
  output.appendChild(para);
}

// GUI CODE END

// GAME CODE BEGIN

var thingCount = 1;

const user = { name: "Peter", pronouns: "they/them" };

function handleChoiceClick(event) {
  outputBusy(true);
  outputLive();
  outputClear();
  outputText("You clicked something! Good job");
  outputText("Want a cookie?");
  outputText(parse(text.intro, user));
  outputChoices([
    ["Do thing " + thingCount, "thing1"],
    ["Do thing " + (thingCount + 1), "thing2"],
  ]);
  thingCount += 2;
  outputBusy(false);
}

addEventListener("load", (event) => {
  outputBusy(true);
  outputClear();
  outputText("Hello 1");
  outputText("Hello 2");
  outputChoices([
    ["Do thing 1", "thing1"],
    ["Do thing 2", "thing2"],
  ]);
  thingCount = 3;
  outputBusy(false);
});

// GAME CODE END

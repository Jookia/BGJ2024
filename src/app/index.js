import "./globals.css";
import parse from "@/helpers/parseText";
import { locations } from "@/data/locations";
import clsx from "clsx";
import { write, create, clear } from "@/helpers/htmlElement";

HTMLElement.prototype.write = write;
HTMLElement.prototype.create = create;
HTMLElement.prototype.clear = clear;

const p = (text) => parse(text, player);
const f = (selector) => document.querySelector(selector);

const player = {
  name: "Peter",
  pronouns: "they/them",
};

let location = locations["intro"];
let actionFeedback;

addEventListener("load", () => gameLoop());

function gameLoop() {
  location = location ?? locations["lost"];

  f("#location-description")
    .clear()
    .write(actionFeedback ?? p(location.description));

  f("#buttons").clear();

  if (actionFeedback) {
    f("#buttons")
      .create("button", {
        class: clsx(
          "dark:border-slate-300 dark:text-slate-300",
          "text-3xl",
          "box-border border-2 block w-full m-2 p-4",
          "focus:border-red-600"
        ),
        onclick: () => doAction(null),
      })
      .write("Continue");
  } else {
    Object.entries(location.interactables).forEach(([name, action]) =>
      f("#buttons")
        .create("button", {
          class: clsx(
            "dark:border-slate-300 dark:text-slate-300",
            "text-3xl",
            "box-border border-2 block w-full m-2 p-4",
            "focus:border-red-600"
          ),
          onclick: () => doAction(action),
        })
        .write(action.text)
    );
  }
}

function doAction(action) {
  f("#game-output").ariaBusy = true;
  f("#game-output").ariaLive = "polite";

  if (!action) {
    actionFeedback = null;
  } else if (action.successChance >= Math.random()) {
    actionFeedback = action.successText;
    location = locations[action.successTeleport];
  } else {
    // TODO implement failure event
  }

  gameLoop();

  f("#game-output").ariaBusy = false;
}

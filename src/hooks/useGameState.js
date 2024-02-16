"use client";

import parse from "@/helpers/parseText";
import { useState, useEffect } from "react";
import { locations } from "@/data/locations";

export default function useGameState() {
  const [player, setPlayer] = useState({
    name: "Peter",
    pronouns: "they/them",
  });
  const [location, setLocation] = useState(locations["intro"]);
  const [actionFeedback, setActionFeedback] = useState();
  const f = (selector) => document.querySelector(selector);
  const p = (text) => parse(text, player);

  function doAction(action) {
    if (!action) {
      setActionFeedback(null);
    } else if (action.successChance >= Math.random()) {
      let feedback = action.successText;
      if (feedback !== "" && feedback == actionFeedback) {
        feedback = feedback + " (Repeat)";
      }
      setActionFeedback(p(feedback));
      if (action.successTeleport !== "") {
        setLocation(locations[action.successTeleport]);
      }
    } else {
      // TODO implement failure event
    }
    f("#game-focus").focus();
  }

  let actions = Object.entries(location.interactables).map(
    ([name, interactable]) => ({
      name: name,
      text: interactable.text,
      run: () => doAction(interactable),
    }),
  );

  return {
    locationDescription: p(location.description),
    actionFeedback,
    actions,
  };
}

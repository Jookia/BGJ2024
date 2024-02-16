"use client";

import parse from "@/helpers/parseText";
import gameTick from "@/logic/game";
import { useState, useEffect } from "react";
import { locations } from "@/data/locations";
import { defaultPlayer } from "@/data/defaultPlayer";

export default function useGameState() {
  const [player, setPlayer] = useState(defaultPlayer);
  const [actionFeedback, setActionFeedback] = useState();
  const f = (selector) => document.querySelector(selector);
  const p = (text) => parse(text, player);

  function doAction(interactable) {
    let newPlayer = { ...player };
    let feedback = gameTick(newPlayer, interactable);
    setPlayer(newPlayer);
    if (feedback !== "" && feedback == actionFeedback) {
      feedback = feedback + " (Repeat)";
    }
    setActionFeedback(p(feedback));
    f("#game-focus").focus();
  }

  return {
    locationDescription: p(getLocation(player).description),
    actionFeedback,
    actions: getActions(player, doAction),
  };
}

function getLocation(player) {
  return locations[player.location];
}

function getActions(player, doAction) {
  const location = getLocation(player);
  return Object.entries(location.interactables).map(([name, interactable]) => ({
    name: name,
    text: interactable.text,
    run: () => doAction(interactable),
  }));
}

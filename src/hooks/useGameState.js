"use client";

import { useState } from "react";
import { locations } from "@/data/locations";

export default function useGameState() {
  const [player, setPlayer] = useState({
    name: "Peter",
    pronouns: "they/them",
  });
  const [inventory, setInventory] = useState();
  const [location, setLocation] = useState(locations["intro"]);
  const [actionFeedback, setActionFeedback] = useState();

  const [gameState, setGameState] = useState({
    player,
    location,
    inventory,
    actionFeedback,
  });

  function updateGameState(newGameState) {
    Object.entries(newGameState).forEach(([key, value]) => {
      const setVariable = "set" + key.charAt(0).toUpperCase() + key.slice(1);

      // Dynamically call a setState function.
      window[setVariable](value);
    });
    setGameState({
      player,
      location,
      inventory,
      actionFeedback,
    });
  }

  function doAction(action) {
    const f = (selector) => document.querySelector(selector);

    if (!action) {
      setGameState({ ...gameState, actionFeedback: null });
    } else if (action.successChance >= Math.random()) {
      let feedback = action.successText;
      if (feedback !== "" && feedback == actionFeedback) {
        feedback = feedback + " (Repeat)";
      }
      setGameState({ ...gameState, actionFeedback: feedback });
      if (action.successTeleport !== "") {
        setGameState({
          ...gameState,
          location: locations[action.successTeleport],
        });
      }
    } else {
      // TODO implement failure event
    }
    f("#game-focus").focus();
  }

  return { gameState, updateGameState, doAction };
}


"use client";

import { useState } from "react";
import { defaultState } from "@/data/defaults/state";
// import find from "@/helpers/find";
import gameTick from "@/logic/gameTick";
import parseObject from "@/helpers/parse";

export default function useGameState() {
  const [gameState, setGameState] = useState(defaultState);

  function doAction(action) {
    console.log("test");
    const updates = gameTick(action, { ...gameState });
    setGameState({ ...gameState, ...updates });
    document.querySelector("#game-focus").focus();
  }

  return postProcessGameState(gameState, doAction);
}

function postProcessGameState(gameState, doAction) {
  const location = {
    ...gameState.location,
    interactables: Object.fromEntries(
      Object.entries(gameState.location.interactables).map(
        ([name, interactable]) => [
          name,
          {
            ...interactable,
            run: () => {
              console.log("here");
              doAction(interactable);
            },
          },
        ]
      )
    ),
  };

  const parsedGameState = parseObject(
    { ...gameState, location },
    gameState.player
  );

  return parsedGameState;
}

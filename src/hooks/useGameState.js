"use client";

import { useState } from "react";
import { defaultState } from "@/data/defaults/state";
import find from "@/helpers/find";
import gameTick from "@/logic/gameTick";
import postProcessGameState from "@/logic/postProcess";

export default function useGameState() {
  const [gameState, setGameState] = useState(defaultState);

  function doAction(action) {
    const updates = gameTick(action, { ...gameState });
    setGameState({ ...gameState, ...updates });
    find("#game-focus").focus();
  }

  return postProcessGameState(gameState, doAction);
}

"use client";

import { useState } from "react";
import { defaultState } from "@/data/defaults/state";
import find from "@/helpers/find";
import gameTick from "@/logic/gameTick";

export default function useGameState() {
  const [gameState, setGameState] = useState(defaultState);

  function doAction(action) {
    const updates = gameTick(action, { ...gameState });
    setGameState({ ...gameState, ...updates });
    find("#game-focus").focus();
  }

  return { gameState, doAction };
}

"use client";

import ActionButtonList from "./ActionButtonList";
import StatusText from "./StatusText";
import parse from "@/helpers/parseText";
import useGameState from "@/hooks/useGameState";

export default function GameOutput() {
  const { gameState, setGameState, doAction } = useGameState();
  const { actionFeedback, player, location } = gameState;
  const p = (text) => parse(text, player);
  return (
    <div id="game-output" className="p-8 flex flex-col items-center">
      <StatusText
        actionFeedback={p(actionFeedback)}
        locationDescription={p(location.description)}
      />
      <ActionButtonList interactables={location.interactables} doAction={doAction} />
    </div>
  );
}

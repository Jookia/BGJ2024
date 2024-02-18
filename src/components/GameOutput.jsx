"use client";

import ActionButtonList from "./ActionButtonList";
import StatusText from "./StatusText";
import useGameState from "@/hooks/useGameState";

export default function GameOutput() {
  const gameState = useGameState();
  const { actionFeedback, location } = gameState;

  return (
    <div id="game-output" className="p-8 flex flex-col items-center">
      <StatusText
        actionFeedback={actionFeedback}
        locationDescription={location.description}
        repeats={gameState.feedbackRepeats}
      />
      <ActionButtonList interactables={location.interactables} />
    </div>
  );
}

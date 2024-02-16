"use client";

import ActionButton from "./ActionButton";
import GameStatus from "./GameStatus";
import useGameState from "@/hooks/useGameState";

export default function GameOutput() {
  const { locationDescription, actionFeedback, actions } = useGameState();

  return (
    <div id="game-output" className="p-8 flex flex-col items-center">
      <GameStatus
        actionFeedback={actionFeedback}
        locationDescription={locationDescription}
      />
      <div id="buttons" className="flex flex-col w-8/12">
        {actions.map((action) => (
          <ActionButton
            key={action.name}
            text={action.text}
            onClick={(_) => action.run()}
          />
        ))}
      </div>
    </div>
  );
}

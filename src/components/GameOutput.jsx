import ActionButton from "./ActionButton";
import GameStatus from "./GameStatus";
import parse from "@/helpers/parseText";
import { useState, useEffect } from "react";

export default function GameOutput({
  player,
  setPlayer,
  location,
  setLocation,
}) {
  const [actionFeedback, setActionFeedback] = useState();
  const p = (text) => parse(text, player);
  const f = (selector) => document.querySelector(selector);

  function doAction(action) {
    if (!action) {
      setActionFeedback(null);
    } else if (action.successChance >= Math.random()) {
      setActionFeedback(action.successText);
      if (action.successTeleport !== "") {
        setLocation(action.successTeleport);
      }
    } else {
      // TODO implement failure event
    }
    f("#game-focus").focus();
  }

  return (
    <div id="game-output" className="p-8 flex flex-col items-center">
      <GameStatus
        actionFeedback={p(actionFeedback)}
        locationDescription={p(location.description)}
      />
      <div id="buttons" className="flex flex-col w-8/12">
        {Object.entries(location.interactables).map(([name, action], index) => (
          <ActionButton
            key={name}
            name={name}
            action={action}
            doAction={doAction}
          />
        ))}
      </div>
    </div>
  );
}

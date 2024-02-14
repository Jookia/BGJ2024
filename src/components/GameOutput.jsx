import ActionButton from "./ActionButton";
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
      setLocation(action.successTeleport);
    } else {
      // TODO implement failure event
    }
    const link = document.createElement("a");
    link.href = "#location-description";
    link.click();
  }

  return (
    <div id="game-output" className="p-8 flex flex-col items-center">
      <p id="location-description" className="mb-4 text-lg">
        {actionFeedback ?? p(location.description)}
      </p>
      <div id="buttons" className="flex flex-col w-8/12">
        {actionFeedback ? (
          <>
            <ActionButton
              action={{ text: "Continue" }}
              doAction={() => doAction(null)}
            />
          </>
        ) : (
          <>
            {Object.entries(location.interactables).map(
              ([name, action], index) => (
                <ActionButton
                  key={name}
                  name={name}
                  action={action}
                  doAction={doAction}
                />
              ),
            )}
          </>
        )}
      </div>
    </div>
  );
}

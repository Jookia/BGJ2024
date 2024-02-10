/**
 * Not sure what to do with the ARIA stuff
 * or how to get the screen reader to function properly.
 */

import ActionButton from "./ActionButton";
import parse from "@/helpers/parseText";
import { useState, useEffect, useRef } from "react";

export default function GameOutput({
  player,
  setPlayer,
  location,
  setLocation,
}) {
  const descriptionRef = useRef();
  const [actionFeedback, setActionFeedback] = useState();
  const p = (text) => parse(text, player);
  const f = (selector) => document.querySelector(selector);

  useEffect(() => {
    // descriptionRef.current.focus();
    f("#location-description").focus();
    // f("#location-description").ariaLive = "polite";
    // f("#game-output").ariaBusy = false;
    // f("#location-description").ariaBusy = true;
  }, []);

  function doAction(action) {
    // f("#game-output").ariaBusy = true;
    // f("#location-description").ariaBusy = true;
    // f("#game-output").ariaLive = "polite";
    if (action.successChance >= Math.random()) {
      setActionFeedback(action.successText);
      setLocation(action.successTeleport);
    } else {
      // TODO implement failure event
    }
    // f("#game-output").ariaBusy = false;
  }
  return (
    <div id="game-output" className="p-8 flex flex-col items-center">
      <p
        ref={descriptionRef}
        id="location-description"
        role="location-description"
        aria-live="polite"
        tabIndex={0}
        className="mb-4 text-lg"
      >
        {actionFeedback ?? p(location.description)}
      </p>
      <div id="buttons" aria-live="polite" className="flex flex-col w-8/12">
        {actionFeedback ? (
          <>
            <ActionButton
              action={{ text: "Continue" }}
              doAction={() => setActionFeedback(null)}
            />
          </>
        ) : (
          <>
            {Object.entries(location.interactables).map(([name, action]) => (
              <ActionButton
                key={name}
                name={name}
                action={action}
                doAction={doAction}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

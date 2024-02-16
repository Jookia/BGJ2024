"use client";

import ActionButton from "./ActionButton";
import GameStatus from "./GameStatus";
import parse from "@/helpers/parseText";
import { useState, useEffect } from "react";
import { locations } from "@/data/locations";

export default function GameOutput() {
  const [actionFeedback, setActionFeedback] = useState();
  const p = (text) => parse(text, player);
  const f = (selector) => document.querySelector(selector);
  const [player, setPlayer] = useState({
    name: "Peter",
    pronouns: "they/them",
  });
  const [location, setLocation] = useState(locations["intro"]);

  function doAction(action) {
    if (!action) {
      setActionFeedback(null);
    } else if (action.successChance >= Math.random()) {
      let feedback = action.successText;
      if (feedback !== "" && feedback == actionFeedback) {
        feedback = feedback + " (Repeat)";
      }
      setActionFeedback(feedback);
      if (action.successTeleport !== "") {
        setLocation(locations[action.successTeleport]);
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

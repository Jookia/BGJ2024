import { locations } from "@/data/locations";

export default function gameTick(action, gameState) {
  let { location, actionFeedback, clock } = gameState;

  let feedback = "";

  if (action.successChance < Math.random()) {
    // TODO implement failure event
  } else {
    feedback = action.successText;
    if (action.successTeleport !== "") {
      const successTeleport = locations[action.successTeleport];
      location = {
        ...successTeleport,
        description: successTeleport.description,
      };
    }
    if (!location.freezeTime) {
      clock = updateClock(clock, action.successClock);
    }
  }

  // TODO remove this
  if (feedback !== "" && feedback == actionFeedback) {
    feedback += " (Repeat)";
  }

  return { actionFeedback: feedback, location, clock };
}

function updateClock(currentValue, clockAction) {
  if (!clockAction) {
    return currentValue;
  }

  const command = clockAction[0];
  const value = Number(clockAction.slice(1));

  switch (command) {
    case "=":
      return value;
    case "+":
      return currentValue + value;
    case "-":
      return currentValue - value;
  }

  throw new Error(`Unknown clock action: ${clockAction}`);
}

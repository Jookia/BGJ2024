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
    if (!location.freezeTime && action.successTimeUse) {
      clock += action.successTimeUse;
    }
  }

  // TODO remove this
  if (feedback !== "" && feedback == actionFeedback) {
    feedback += " (Repeat)";
  }

  console.log(`gameState clock: ${gameState.clock}`);

  return { actionFeedback: feedback, location, clock };
}

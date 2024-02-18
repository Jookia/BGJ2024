import { locations } from "@/data/locations";

export default function gameTick(action, gameState) {
  let { location, actionFeedback, clock, feedbackRepeats } = gameState;

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

  if (feedback === actionFeedback) {
    feedbackRepeats++;
  } else {
    feedbackRepeats = 0;
  }

  console.log(`gameState clock: ${gameState.clock}`);

  return { actionFeedback: feedback, location, clock, feedbackRepeats };
}

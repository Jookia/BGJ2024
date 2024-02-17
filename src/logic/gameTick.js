import { locations } from "@/data/locations";

export default function gameTick(action, gameState) {
  let { location, actionFeedback } = gameState;

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
  }

  // TODO remove this
  if (feedback !== "" && feedback == actionFeedback) {
    feedback += " (Repeat)";
  }

  return { actionFeedback: feedback, location };
}

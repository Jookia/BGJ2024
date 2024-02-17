import parse from "@/helpers/parseText";
import { locations } from "@/data/locations";

export default function gameTick(action, gameState) {
  let { player, location, actionFeedback } = gameState;
  const p = (text) => parse(text, player);

  let feedback = "";

  if (action.successChance < Math.random()) {
    // TODO implement failure event
  } else {
    feedback = action.successText;
    if (action.successTeleport !== "") {
      const successTeleport = locations[action.successTeleport];
      location = {
        ...successTeleport,
        description: p(successTeleport.description),
      };
    }
  }

  // TODO remove this
  if (feedback !== "" && feedback == actionFeedback) {
    feedback += " (Repeat)";
  }

  return { actionFeedback: p(feedback), location };
}

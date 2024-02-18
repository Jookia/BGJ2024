import { locations } from "@/data/locations";

export default function gameTick(action, gameState) {
  let { location, actionFeedback, clock, feedbackRepeats } = gameState;

  // Select commands to use
  let command = {};
  if (action.successChance < Math.random()) {
    command = action.failure;
  } else {
    command = action.success;
  }

  // Update location
  let newLocation = location;
  if (command.teleport != "") {
    newLocation = locations[command.teleport];
  }
  location = {
    ...newLocation,
    description: newLocation.description,
  };

  // Update clock
  if (!location.freezeTime && command.timeUse) {
    clock += command.timeUse;
  }
  console.log(`gameState clock: ${gameState.clock}`);

  // Update feedback repeats
  const newFeedback = command.text;
  if (newFeedback === actionFeedback) {
    feedbackRepeats++;
  } else {
    feedbackRepeats = 0;
  }

  return { actionFeedback: newFeedback, location, clock, feedbackRepeats };
}

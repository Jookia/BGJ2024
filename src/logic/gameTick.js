import { locations } from "@/data/locations";

export default function gameTick(action, gameState) {
  let { location, actionFeedback, clock, feedbackRepeats } = gameState;

  const isSuccessful = action.successChance >= Math.random();
  const command = isSuccessful ? action.success : action.failure;

  return {
    actionFeedback: command.text,
    location: teleport(location, command.teleport),
    clock: incrementClock(clock, command.freezeTime, command.timeUse),
    feedbackRepeats: updateRepeats(
      actionFeedback,
      command.text,
      feedbackRepeats,
    ),
  };
}

function incrementClock(clock, timeFrozen, timeUse) {
  if (timeFrozen || !timeUse) return clock;
  return clock + timeUse;
}

function teleport(oldLocation, newLocation) {
  if (!newLocation) return oldLocation;
  return locations[newLocation];
}

function updateRepeats(oldFeedback, newFeedback, repeats) {
  if (oldFeedback !== newFeedback) return 0;
  return repeats + 1;
}

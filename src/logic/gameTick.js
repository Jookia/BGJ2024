import { locations } from "@/data/locations";

export default function gameTick(action, gameState) {
  let {
    location,
    actionFeedback,
    clock,
    feedbackRepeats,
    inventory,
    interactables,
  } = gameState;

  const isSuccessful = action.successChance >= Math.random();
  const command = isSuccessful ? action.success : action.failure;
  const newLocation = teleport(location, command.teleport);

  let newInteractables = newLocation.interactables;
  gameState.inventory.forEach((item) => {
    newInteractables = Object.assign(newInteractables, item.interactables);
  });

  return {
    actionFeedback: command.text,
    location: teleport(location, command.teleport),
    clock: incrementClock(clock, command.freezeTime, command.timeUse),
    feedbackRepeats: updateRepeats(
      actionFeedback,
      command.text,
      feedbackRepeats,
    ),
    inventory,
    interactables: newInteractables,
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

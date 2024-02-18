import parseObject from "@/helpers/parse";

export default function postProcessGameState(gameState, doAction) {
  const location = {
    ...gameState.location,
    interactables: Object.fromEntries(
      Object.entries(gameState.location.interactables).map(
        ([name, interactable]) => [
          name,
          {
            ...interactable,
            run: () => {
              doAction(interactable);
            },
          },
        ],
      ),
    ),
  };

  const parsedGameState = parseObject(
    { ...gameState, location },
    gameState.player,
  );

  const actionFeedback = appendRepeats(
    gameState.actionFeedback,
    gameState.feedbackRepeats,
  );

  return { ...parsedGameState, actionFeedback };
}

function appendRepeats(actionFeedback, repeats) {
  if (!repeats) return actionFeedback;
  const times = `time${repeats > 1 ? "s" : ""}`;
  return `${actionFeedback} (Repeated ${repeats} ${times})`;
}

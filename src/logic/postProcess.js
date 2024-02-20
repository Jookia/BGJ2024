import parseObject from "@/helpers/parse";

export default function postProcessGameState(gameState, doAction) {
  const interactables = Object.fromEntries(
    Object.entries(gameState.interactables).map(([name, interactable]) => [
      name,
      {
        ...interactable,
        run: () => {
          doAction(interactable);
        },
      },
    ]),
  );

  const parsedGameState = parseObject(
    {
      ...gameState,
      actionFeedback: `${gameState.actionFeedback}\${repeats}`,
      interactables,
    },
    { ...gameState.player, repeats: repeatText(gameState.feedbackRepeats) },
  );

  return parsedGameState;
}

function repeatText(repeats) {
  if (!repeats) return "";
  const times = `time${repeats > 1 ? "s" : ""}`;
  return ` (Repeated ${repeats} ${times})`;
}

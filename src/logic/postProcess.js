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

  if (!gameState.location.freezeTime) {
    const clockFeedback = `${gameState.actionFeedback} You have ${gameState.clock} second(s) left.`;
    const clockGameState = {
      ...parsedGameState,
      actionFeedback: clockFeedback,
    };
    return clockGameState;
  } else {
    return parsedGameState;
  }
}

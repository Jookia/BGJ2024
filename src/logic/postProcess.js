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

  return parsedGameState;
}

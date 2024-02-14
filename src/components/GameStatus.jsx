import clsx from "clsx";

export default function GameStatus({ actionFeedback, locationDescription }) {
  return (
    <>
      <p
        id="game-status"
        className="mb-4 text-lg focus-visible:outline-none"
        tabIndex="-1"
      >
        {actionFeedback ?? locationDescription}
      </p>
      {actionFeedback && <p className="mb-4 text-lg">{locationDescription}</p>}
    </>
  );
}

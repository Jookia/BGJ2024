import clsx from "clsx";

export default function GameStatus({ actionFeedback, locationDescription }) {
  return (
    <>
      <p role="status" className="mb-4 text-lg">
        {actionFeedback ?? locationDescription}
      </p>
      <div
        id="game-focus"
        tabIndex="-1"
        className="focus-visible:outline-none"
      ></div>
      {actionFeedback && <p className="mb-4 text-lg">{locationDescription}</p>}
    </>
  );
}

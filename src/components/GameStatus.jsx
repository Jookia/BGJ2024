import clsx from "clsx";

export default function GameStatus({ actionFeedback, locationDescription }) {
  return (
    <>
      <p aria-live="alert" className="mb-4 text-lg">
        {actionFeedback ?? locationDescription}
      </p>
      {actionFeedback && <p className="mb-4 text-lg">{locationDescription}</p>}
    </>
  );
}

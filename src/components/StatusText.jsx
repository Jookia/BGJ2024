export default function StatusText({ actionFeedback, locationDescription }) {
  return (
    <>
      <div
        id="game-focus"
        tabIndex="-1"
        className="focus-visible:outline-none"
      ></div>
      <p role="status" className="mb-4 text-lg">
        {actionFeedback ?? locationDescription}
      </p>
      {actionFeedback && <p className="mb-4 text-lg">{locationDescription}</p>}
    </>
  );
}

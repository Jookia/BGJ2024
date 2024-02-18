import string from "@/helpers/string";

export default function StatusText({
  actionFeedback,
  locationDescription,
  repeats,
}) {
  return (
    <>
      <div
        id="game-focus"
        tabIndex="-1"
        className="focus-visible:outline-none"
      ></div>
      <p role="status" className="mb-4 text-lg">
        {string(appendRepeats(actionFeedback, repeats)) ?? locationDescription}
      </p>
      {actionFeedback && <p className="mb-4 text-lg">{locationDescription}</p>}
    </>
  );
}

function appendRepeats(actionFeedback, repeats) {
  if (!actionFeedback || !repeats) return actionFeedback;
  const times = `time${repeats > 1 ? "s" : ""}`;
  return `${actionFeedback} (Repeated ${repeats} ${times})`;
}

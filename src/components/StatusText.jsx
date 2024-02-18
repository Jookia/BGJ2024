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
        {appendRepeats(actionFeedback, repeats)}
      </p>
      <p className="mb-4 text-lg">{locationDescription}</p>
    </>
  );
}

function appendRepeats(actionFeedback, repeats) {
  if (!repeats) return actionFeedback;
  const times = `time${repeats > 1 ? "s" : ""}`;
  return `${actionFeedback} (Repeated ${repeats} ${times})`;
}

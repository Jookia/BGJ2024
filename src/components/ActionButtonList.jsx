import ActionButton from "./ActionButton";

export default function ActionButtonList({ interactables }) {
  return (
    <div id="buttons" className="flex flex-col w-8/12">
      {Object.entries(interactables).map(([name, action]) => (
        <ActionButton key={name} action={action} />
      ))}
    </div>
  );
}

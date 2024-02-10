import clsx from "clsx";

export default function ActionButton({ name, action, doAction }) {
  return (
    <button
      className={clsx(
        "dark:border-slate-300  dark:text-slate-300",
        "text-3xl",
        "box-border border-2 block w-full m-2 p-4",
        "focus:border-red-600"
      )}
      {...{ [`data-${name}`]: name }} //? Do we need this?
      tabIndex={0}
      onClick={(_) => doAction(action)}
    >
      {action.text}
    </button>
  );
}

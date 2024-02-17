export default function string(value) {
  if (value === "" || typeof value !== "string") return undefined;

  return value;
}

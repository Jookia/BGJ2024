export default function parseObject(objectToParse, lookupTable = {}) {
  return Object.fromEntries(
    Object.entries(objectToParse).map(([key, value]) => {
      switch (typeof value) {
        case "object":
          return [key, parseObject(objectToParse[key], lookupTable)];
        case "string":
          return [key, parseString(value, lookupTable)];
        default:
          return [key, value];
      }
    })
  );
}

export function parseString(text, lookupTable = {}) {
  if (typeof text !== "string") {
    return;
  }

  if (!text) {
    return "";
  }

  return text.replace(
    /\${(\w*)}/g,
    (match, variable) => lookupTable[variable] ?? match
  );
}

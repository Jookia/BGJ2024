export default function parse(text, lookupTable) {
  return text.replace(
    /\${(\w*)}/g,
    (match, variable) => lookupTable[variable] ?? match,
  );
}

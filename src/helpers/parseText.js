export default function parse(text, lookupTable = []) {
  if (!text) {
    return;
  }
  
  return text.replace(
    /\${(\w*)}/g,
    (match, variable) => lookupTable[variable] ?? match,
  );
}

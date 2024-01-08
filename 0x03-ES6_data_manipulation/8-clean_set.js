export default function cleanSet(set, startString) {
  if (!startString) {
    return '';
  }

  const string = [...set]
    .filter((ele) => ele.startsWith(startString) && startString.length > 0)
    .map((ele) => ele.slice(startString.length));

  return string.join('-');
}

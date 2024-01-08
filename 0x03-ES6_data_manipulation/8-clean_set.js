export default function cleanSet(set, startString) {
  if (!startString) {
    return '';
  }

  return [...set]
    .filter((ele) => ele.startsWith(startString) && startString.length > 0)
    .map((ele) => ele.slice(startString.length))
    .join('-');

}

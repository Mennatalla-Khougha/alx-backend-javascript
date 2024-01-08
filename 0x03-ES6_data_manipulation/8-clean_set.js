export default function cleanSet(set, startString) {
  if (!startString || startString === undefined) {
    return '';
  }

  return [...set]
    .filter((ele) => (ele != undefined ? ele.startsWith(startString) : ""))
    .map((ele) => ele.slice(startString.length))
    .join('-');

}

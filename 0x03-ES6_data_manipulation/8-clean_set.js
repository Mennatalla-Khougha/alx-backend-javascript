export default function cleanSet(set, startString) {
  if (startString.length === 0 || startString === undefined) {
    return '';
  }

  return [...set]
    .filter((ele) => (ele !== undefined ? ele.startsWith(startString) : ''))
    .map((ele) => (ele !== undefined ? ele.startsWith(startString.length) : ''))
    .join('-');
}

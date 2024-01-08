export default function cleanSet(set, startString) {
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  return [...set]
    .filter((ele) => (ele !== undefined ? ele.startsWith(startString) : ''))
    .map((ele) => (ele !== undefined ? ele.slice(startString.length) : ''))
    .join('-');
}

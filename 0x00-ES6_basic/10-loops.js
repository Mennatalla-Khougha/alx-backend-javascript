#!/usr/bin/node
export default function appendToEachArrayValue(array, appendString) {
  const result = [];

  for (const idx of array) {
    const value = appendString + idx;
    result.push(value);
  }

  return result;
}

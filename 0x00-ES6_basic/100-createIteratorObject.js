#!/usr/bin/node
export default function createIteratorObject(report) {
  const result = [];
  Object.values(report.allEmployees).forEach((element) => {
    result.push(...element);
  });
  return result;
}

#!/usr/bin/node
export default function createReportObject(employeesList) {
  const result = {};

  result.allEmployees = employeesList;
  result.getNumberOfDepartments = (employeesList) => Object.keys(employeesList).length;

  return result;
}

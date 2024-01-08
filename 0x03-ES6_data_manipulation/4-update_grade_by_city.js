/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(array, city, newGrades) {
  const student = array.filter((ele) => ele.location === city);

  const grades = new Map(
    newGrades.map((ele) => [ele.studentId, ele.grade]),
  );
  return student.map((ele) => {
    ele.grade = grades.get(ele.id) || 'N/A';
    return ele;
  });
}

export default function getStudentIdsSum(array) {
  return array.reduce((acc, ele) => acc + ele.id, 0);
}

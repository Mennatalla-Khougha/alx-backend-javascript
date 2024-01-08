export default function getStudentsByLocation(array, city) {
  return array.filter((ele) => ele.location === city);
}

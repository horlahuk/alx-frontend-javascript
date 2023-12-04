export default function getStudentsIdSum(students) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue.id;
  return students.reduce(reducer, 0);
}

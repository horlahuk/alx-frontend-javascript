export default function getListStudentsId(arg) {
  if (!Array.isArray(arg)) return [];
  return arg.map((item) => item.id);
}

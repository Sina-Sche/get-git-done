export function without(array, id) {
  const newArray = array.filter((todo) => todo !== id);
  return newArray;
}

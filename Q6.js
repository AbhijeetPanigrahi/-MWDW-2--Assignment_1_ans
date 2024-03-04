function EvenOnly(arr) {
  const newArr = arr.filter((num) => num % 2 == 0);
  return newArr;
}
const arr = [5, 4, 7, 2, 56, 89, 14, 23, 57, 8485];
document.write(EvenOnly(arr));

function sumOfNums(arr) {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
const arr = [1, 2, 3];
document.write("sum of the numbers in given array is: " + sumOfNums(arr));

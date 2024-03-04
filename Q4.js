function findMissingNumber(arr) {
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;

  const actualSum = arr.reduce((sum, num) => sum + num, 0);

  // The missing number is the difference between the expected sum and the actual sum
  const missingNumber = expectedSum - actualSum;

  return missingNumber;
}

const numbersArray = [1, 2, 3, 4, 5, 7, 8, 9];
const missingNumber = findMissingNumber(numbersArray);

document.write("The missing number is: " + missingNumber);

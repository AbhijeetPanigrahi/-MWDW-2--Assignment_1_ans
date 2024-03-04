function isPrime(number) {
  if (number <= 1) {
    return false; // Numbers less than or equal to 1 are not prime
  }

  // Check for divisibility from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false; // If divisible, the number is not prime
    }
  }
  return true; // If not divisible by any number, the number is prime
}

const testNumber = 24;
document.write(`${testNumber} is prime: ${isPrime(testNumber)}`);

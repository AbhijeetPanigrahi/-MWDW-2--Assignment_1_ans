function multiply() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  if (!isNaN(num1) && !isNaN(num2)) {
    const result = num1 * num2;
    document.write(`Multiplication Result: ${result} <br>`);
  } else {
    document.write("Please enter valid numbers.");
  }
}

function divide() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  if (!isNaN(num1) && !isNaN(num2) && num2 !== 0) {
    const result = num1 / num2;
    document.write(`Division Result: ${result} <br>`);
  } else {
    document.write(
      "Please enter valid numbers. Ensure the second number is not zero."
    );
  }
}

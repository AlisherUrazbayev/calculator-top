let firstNumber;
let secondNumber;
let operator;

function operate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);

    case "*":
      return multiply(num1, num2);

    case "/":
      return divide(num1, num2);
  }
}
function checkConsoleResult() {
  let result = 0;

  result = add(4, 8);
  console.log("ADD: " + result);
  result = subtract(4, 8);
  console.log("SUBTRACT: " + result);
  result = multiply(4, 8);
  console.log("MULTIPLY: " + result);
  result = divide(12, 0);
  console.log("DIVIDE: " + result);
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num2 === 0 ? "Can't devide by 0." : num1 / num2;
}

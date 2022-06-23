// function to add numbers
const addition = (num1, num2) => {
  const total = num1 + num2;
  return console.log(`${num1} plus ${num2} = ${total}`);
};

// function to subtract numbers
const subtraction = (num1, num2) => {
  const total = num1 - num2;
  return console.log(`${num1} minus ${num2} = ${total}`);
};

// function to multiply numbers
const multiplication = (num1, num2) => {
  const total = num1 * num2;
  return console.log(`${num1} mutiply ${num2} = ${total}`);
};

// function to divide numbers
const division = (num1, num2) => {
  const total = num1 / num2;
  return console.log(`${num1} divided ${num2} = ${total}`);
};

// function to calculate the remainder of a division
const remainder = (num1, num2) => {
  const total = num1 % num2;
  return console.log(`${num1} divided ${num2} has a reminder of = ${total}`);
};

addition(10, 8);
subtraction(12, 9);
multiplication(7, 9);
division(45, 3);
remainder(10, 3);

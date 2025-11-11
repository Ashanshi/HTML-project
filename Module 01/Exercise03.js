const num1 = parseInt(prompt('Enter the first integer:'));
const num2 = parseInt(prompt('Enter the Second integer:'));
const num3 = parseInt(prompt('Enter the Third integer:'));

const sum = num1 + num2 + num3;
const product = num1 * num2 * num3;
const average = sum / 3;

document.querySelector('#result').innerHTML = `
  Sum: ${sum} <br>Product: ${product} <br>Average: ${average.toFixed(2)}`;
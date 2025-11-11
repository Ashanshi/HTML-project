const numbers = [];

for (let i = 0; i < 5; i++) {
  const num = parseFloat(prompt(`Enter number ${i + 1}:`));
  numbers.push(num);
}

console.log('Numbers in Reverse Order:');
for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
}
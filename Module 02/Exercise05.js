function checkNumbers() {
  const numbers = [];

  while (true) {
    const input = prompt("Enter a number:");
    const num = Number(input);

    if (isNaN(num)) {
      alert("Please enter a valid number!");
      continue;
    }

    if (numbers.includes(num)) {
      alert(`You already entered ${num}! Program will stop.`);
      break;
    }

    numbers.push(num);
  }

  // Sort numbers in ascending order
  numbers.sort((a, b) => a - b);

  // Print in console
  console.log("Numbers entered in ascending order:");
  for (let n of numbers) {
    console.log(n);
  }
}
function sortNumbers() {
  const numbers = [];

  while (true) {
    const input = prompt("Enter a Number:");
    const num = Number(input);

    if (num == 0) {
      break;
    }
    if (!isNaN(num)) {
      numbers.push(num);
    } else {
      alert("Please Enter a Valid Number!");
    }
  }
  numbers.sort((a, b) => b - a);

  console.log("Numbers from Largest to Smallest:");
  for (let n of numbers) {
    console.log(n);
  }
}
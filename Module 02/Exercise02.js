function getParticipants() {
  const number = parseInt(prompt("Enter the number of participants:"));

  if (isNaN(number) || number <= 0) {
    alert("Please Enter a valid number!");
    return;
  }

  const participants = [];

  for (let i = 0; i < number; i++) {
    const name = prompt(`Enter the name of participant ${i + 1}:`);
    participants.push(name.trim());
  }
  participants.sort();

  let result = "<ol>";
  for (let name of participants) {
    result += `<li>${name}</li>`;
  }
  result += "</ol>";


  document.getElementById("output").innerHTML = result;
}
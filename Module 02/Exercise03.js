function getNames() {
  const dogs = [];

for (let i = 0; i < 6; i++) {
    const name = prompt(`Enter the name of the dog ${i + 1}:`);
    dogs.push(name.trim());
  }

dogs.sort().reverse();

let output = "<ul>";
  for (let dog of dogs) {
    output += `<li>${dog}</li>`;
  }
  output += "</ul>";

  document.getElementById("result").innerHTML = output;
}
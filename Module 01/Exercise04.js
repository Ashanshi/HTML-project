const studentname = prompt( 'Enter Your Good Name, Young Wizard:');
const randomnumber = Math.floor(Math.random() *4 + 1);

let house

if
(randomnumber == 1){
house = "Gryffindor";
}

else if
(randomnumber == 2){
house = "Slytherin";
}

else if
(randomnumber == 3){
house = "Hufflepuff";
}

else{
house = "Ravenclaw";
}

document.querySelector('#result').innerHTML = `
  ${studentname}, You are ${house}, !`
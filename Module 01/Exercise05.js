const year = parseInt(prompt('Enter a year:'));

let result;

if ((year % 4 == 0 && year % 100 !== 0 ) || (year % 400 == 0)){
result = `${year} is a Leap Year!`;
}

else{
result = `${year} is not a Leap Year.`;
}

document.querySelector('#output').innerHTML = result;
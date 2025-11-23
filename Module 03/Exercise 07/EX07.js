'use strict';

const trigger = document.getElementById('trigger');
const image = document.getElementById('target');

trigger.addEventListener('mouseover', () => {
  image.src = 'picB.jpg'; // change to B
});

trigger.addEventListener('mouseout', () => {
  image.src = 'picA.jpg'; // change back to A
});

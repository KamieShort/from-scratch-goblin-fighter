// import functions and grab DOM elements
import { renderDragon } from './utils.js';
const defeatedNumberEl = document.getElementById('defeated-number')
const spellsRemainingEl = document.getElementById('wizard-spells')

// let state
let spells = 5;
let defeatedDragons = 0;
let dragons = [
  {name: 'Fireball', hp: 5},
  {name: 'Scales', hp: 5},
  (name: 'Patty', hp: 5},
];

// set event listeners
//new dragon form
form.addEventListener('submit', (e)) => {
  e.preventDefault();
  
}
// get user input
// use user input to update state
// update DOM to reflect the new state

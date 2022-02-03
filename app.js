// import functions and grab DOM elements
import { renderDragon } from './utils.js';
const defeatedNumberEl = document.getElementById('defeated-number');
const spellsRemainingEl = document.getElementById('wizard-spells');
const form = document.getElementById('new-form');
const dragonListEl = document.querySelector('.dragons');

// let state
let spells = 5;
let defeatedDragons = 0;
let dragons = [
    { name: 'Fireball', hp: 5 },
    { name: 'Scales', hp: 5 },
    { name: 'Patty', hp: 5 },
];

// set event listeners
//new dragon form
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const dragonName = data.get('dragon-name');

    const newDragon = {
        name: dragonName,
        hp: 5,
    };
    newDragon.push(newDragon);

    displayDragons();
});

function displayDragons() {
    dragonListEl.textContent = '';

    for (let dragon of dragons) {
        const dragonListEl = renderDragon(dragon);

        dragonEl.addEventListener('click', () => {
            dragonClickHandler(dragon);
        });
        dragonListEl.append(dragonEl);
    }
}
displayDragons();

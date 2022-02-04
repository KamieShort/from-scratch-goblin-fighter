// import functions and grab DOM elements
import { renderDragon } from './utils.js';
const defeatedNumberEl = document.getElementById('defeated-number');
const spellsRemainingEl = document.getElementById('wizard-spells');
const form = document.getElementById('new-form');
const dragonListEl = document.querySelector('.dragons');
const wizardImgEl = document.querySelector('#wizard-img');

// let state
let defeatedDragons = 0;
let spells = 5;
let dragons = [
    { id: 1, name: 'Fireball', hp: 5 },
    { id: 2, name: 'Scales', hp: 5 },
    { id: 3, name: 'Patty', hp: 5 },
];
let currentId = 3;
// set event listeners
//new dragon form
spellsRemainingEl.textContent = spells;
defeatedNumberEl.textContent = defeatedDragons;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const dragonName = data.get('dragon-name');

    const newDragon = {
        id: currentId++,
        name: dragonName,
        hp: 5,
    };
    dragons.push(newDragon);

    displayDragons();
});

function displayDragons() {
    dragonListEl.textContent = '';

    for (let dragon of dragons) {
        const dragonEl = renderDragon(dragon);

        dragonEl.addEventListener('click', () => {
            dragonClickHandler(dragon);
        });
        dragonListEl.append(dragonEl);
    }
}
displayDragons();

function dragonClickHandler(dragonData) {
    if (dragonData.hp <= 0) return;
    if (Math.random() < 0.5) {
        alert(`You hit ${dragonData.name}!`);
        dragonData.hp--;
    } else {
        alert('You missed!');
    }
    displayDragons();
    if (Math.random() < 0.5) {
        spells--;
        alert('You got hit');
    } else {
        alert(`${dragonData.name} missed!`);
    }
    spellsRemainingEl.textContent = spells;
    const dragonHPEl = document.getElementById(`dragon-hp-${dragonData.id}`);
    dragonHPEl.textContent = dragonData.hp;

    const faceEl = document.getElementById(`dragon-face-${dragonData.id}`);
    faceEl.textContent = dragonData.hp > 0 ? '👹' : '🔥';

    if (dragonData.hp === 0) {
        defeatedDragons++;
        defeatedNumberEl.textContent = defeatedDragons;
    }

    if (spells === 0) {
        wizardImgEl.classList.add('game-over');
        alert('Game Over!');
    }
    const allDefeated = dragons.every((dragon) => dragon.hp === 0);
    if (allDefeated) alert('You win!!!');
}

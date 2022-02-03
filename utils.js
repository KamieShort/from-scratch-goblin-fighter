export function renderDragon(dragonData) {
    const dragonEl = document.createElement('div');
    const faceEl = document.createElement('p');
    const nameEl = document.createElement('p');
    const hpEl = document.createElement('p');

    dragonEl.classList.add('dragon');

    nameEl.textContent = dragonData.name;
    hpEl.textContent = dragonData.hp < 0 ? 0 : dragonData.hp;
    faceEl.textContent = dragonData.hp > 0 ? '👹' : '🔥';

    if (dragonData.hp < 0) {
        dragonEl.classList.add('dead');
    }

    dragonEl.append(nameEl, faceEl, hpEl);

    return dragonEl;
}

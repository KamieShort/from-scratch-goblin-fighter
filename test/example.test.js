// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderDragon } from '../utils.js';

const test = QUnit.test;

test('renderDragons should return an object (newDragon) with name and hp.', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="dragon"><p>Fireball</p><p>👹</p><p>5</p></div>`;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderDragon({
        name: 'Fireball',
        hp: 5,
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

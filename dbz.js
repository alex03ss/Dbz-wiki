/*
 * Name: Alexander Seretse
 * Date: October 18, 2024
 * Section: CSE 154 AE
 *
 * This is the JS to implement the UI for dbz wikipedia featuring search bar functions
 * as well as displaying character biographies
 */

'use strict';

/**
 * Searches for characters in the character list and displays them.
 */
function searchCharacters() {
  let input = document.getElementById('search-bar').value.toUpperCase();
  let ul = document.getElementById('character-list');
  let li = ul.getElementsByTagName('li');

  for (let i = 0; i < li.length; i++) {
    let characterName = li[i].textContent || li[i].innerText;
    if (characterName.toUpperCase().indexOf(input) > -1) {
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }
}

/**
 * Displays the biography for the selected character.
 * @param {string} name - The name of the character.
 * @param {string} description - The description of the character.
 */
function showBio(name, description) {
  let bioName = document.getElementById('bio-name');
  let bioDescription = document.getElementById('bio-description');
  bioName.textContent = name;
  bioDescription.textContent = description;
}

/**
 * Searches for energy attacks in the attack list and displays them.
 */
function searchAttacks() {
  let input = document.getElementById('search-bar-attack').value.toUpperCase();
  let ul = document.getElementById('ki-attack-list');
  let li = ul.getElementsByTagName('li');

  for (let i = 0; i < li.length; i++) {
    let attackName = li[i].textContent || li[i].innerText;
    if (attackName.toUpperCase().indexOf(input) > -1) {
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }
}

// Add event listeners to call the functions when needed
document.addEventListener('DOMContentLoaded', function() {
  // Attach 'keyup' event listener to the character search input
  document.getElementById('search-bar').addEventListener('keyup', searchCharacters);

  // Attach 'keyup' event listener to the attack search input
  document.getElementById('search-bar-attack').addEventListener('keyup', searchAttacks);

  // Attach 'click' event listeners to each character in the list for showing bio
  document.getElementById('Goku').addEventListener('click', function() {
    showBio('Goku', 'Goku is a Saiyan warrior who protects Earth from powerful foes.');
  });

  document.getElementById('Vegeta').addEventListener('click', function() {
    showBio('Vegeta', 'Vegeta is a prideful Saiyan prince who is rivals with Goku.');
  });

  document.getElementById('Gohan').addEventListener('click', function() {
    showBio('Gohan', 'Gohan is the son of Goku, a gentle warrior who excels in academics.');
  });

  document.getElementById('Piccolo').addEventListener('click', function() {
    showBio('Piccolo', 'Piccolo is a wise and powerful Namekian warrior.');
  });

  document.getElementById('Trunks').addEventListener('click', function() {
    showBio('Trunks', 'Trunks is a time-traveling Saiyan and son of Vegeta.');
  });
});

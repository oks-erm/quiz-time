import { getData } from "./getfact.js";

const funfactText = document.getElementById('funfact-text');
const playAgain = document.getElementById('play-again');
const changeName = document.getElementById('change-name');

getData();

// write response result to the text field or a backup text if the API call fails 
export function writeData(fact) {
  if (fact.length > 0) {
    funfactText.innerHTML = fact;
  } else {
    funfactText.innerHTML = "It's impossible to hum while holding your nose.";
  }
}

// add event listeners to buttons with change of attribute for easier testing
export function setEventListeners() {
  if (changeName.getAttribute('data-listener') !== 'true') {
    // navigate to the home page when clicked
    changeName.addEventListener('click', () => window.location.assign('index.html'));
    changeName.setAttribute('data-listener', 'true');
  }
  if (playAgain.getAttribute('data-listener') !== 'true') {
    // navigate to the game page when clicked
    playAgain.addEventListener('click', () => window.location.assign('game.html'));
    playAgain.setAttribute('data-listener', 'true');
  }
}

// fade the loader when getData function is completed
$.when(getData()).done(function () {
  $(".loader-wrapper").fadeOut("slow");
  setEventListeners();
  // get the viewport height and multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  // listen to the resize event
  window.addEventListener('resize', () => {
    // set the value again based on the new viewport size
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
// (c) https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
});
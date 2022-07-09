let fact;
const funfactText = document.getElementById('funfact-text');
const playAgain = document.getElementById('play-again');
const changeName = document.getElementById('change-name');

// get a random fact from API
async function getData() {
    const response = await $.ajax({
      url: 'https://uselessfacts.jsph.pl/random.json?language=en',
      method: "GET",
      dataType: "json"
    });
    fact = response.text;
    writeData(fact);
  }

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
    };
    if (playAgain.getAttribute('data-listener') !== 'true') {
      // navigate to the game page when clicked
      playAgain.addEventListener('click', () => window.location.assign('game.html'));
      playAgain.setAttribute('data-listener', 'true');
    };
  }

// add event listener to a window to fade out loader when the page is loaded
$(window).on("load", function () {
    $(".loader-wrapper").fadeOut("slow");
    getData();
    setEventListeners();
  })

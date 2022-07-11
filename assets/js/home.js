let input;
const form = window.document.querySelector('form');

export function validateInput(input) {
    // Make sure there is input and it's not spaces only
    if (!input || input.trim().length === 0) {
        window.alert('Please, enter name to play!');
    } else {
        //Stores user name to access it later
        sessionStorage.setItem('userName', input);
        // Navigates to the game page
        window.location.assign('game.html');
    }
}

export function formHandler(event) {
    //prevents default behavior
    event.preventDefault();
    // store input value in a variable
    input = document.getElementById('usrname').value;
    validateInput(input);
}

// add event listener with change of attribute to enable testing it
if (form.getAttribute('data-listener') !== "true") {
    form.addEventListener('submit', formHandler);
    form.setAttribute('data-listener', 'true');
}

// add event listener to the window to fade out loader when the page is loaded
$(window).on("load", function () {
    $(".loader-wrapper").fadeOut("slow");
})

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
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
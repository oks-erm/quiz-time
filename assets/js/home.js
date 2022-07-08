let input;
const form = window.document.querySelector('form');

function formHandler(event) {
    //prevents default behavior
    event.preventDefault();
    // store input value in a variable
    input = document.getElementById('usrname').value;
    validateInput(input);
}

// add event listener with change of attribute to enable testing it
if(form.getAttribute('data-listener') !== "true") {
    form.addEventListener('submit', formHandler);
    form.setAttribute('data-listener', 'true');
}
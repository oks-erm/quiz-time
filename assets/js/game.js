let userName = sessionStorage.getItem('userName');
let difficulty;

setDifficulty();

// Add event listeners to difficulty buttons and change the attribute
export function setDifficulty() {
    for (let button of document.getElementsByClassName('difficulty')) {
        if(button.getAttribute('data-listener') !== 'true') {
            button.addEventListener('click', eventHandler);
            button.setAttribute('data-listener', 'true');
        }
    }
}

export function eventHandler(e) {
    //get id of a clicked button to set an API adress for the API call
    difficulty = e.target.getAttribute('id');
    // setApiAddress(difficulty);
    // callAPI(apiAddress);
    console.log(difficulty);
    console.log(userName);
    return difficulty;
}
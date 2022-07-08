// API
const easyLevel = 'https://opentdb.com/api.php?amount=20&difficulty=easy&type=multiple';
const mediumLevel = 'https://opentdb.com/api.php?amount=20&difficulty=medium&type=multiple';
const expertLevel = 'https://opentdb.com/api.php?amount=20&difficulty=hard&type=multiple';
let apiAddress;

let data = {};
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
    setApiAddress(difficulty);
    callAPI(apiAddress);
    console.log(difficulty);
    console.log(userName);
    return difficulty;
}

// Set apiAddress depending on a button clicked
export function setApiAddress(difficulty) {
    if (difficulty === 'easy') {
        apiAddress = easyLevel;
    } else if (difficulty === 'medium') {
        apiAddress = mediumLevel;
    } else {
        apiAddress = expertLevel;
    }
    return apiAddress;
}

// Call API
export async function callAPI(apiAddress) {
    const response = await fetch(apiAddress);
    // assign response to variable when promise resolves
    if (response.status > 199 && response.status < 300) {
        data = await response.json();
        // difficultyToGame();
        console.log(data);
        return data;
    } else {
    // navigate to the error page if response is not successful 
        // window.location.assign('500.html');
    }
}

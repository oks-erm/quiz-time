// API
const easyLevel = 'https://opentdb.com/api.php?amount=20&difficulty=easy&type=multiple';
const mediumLevel = 'https://opentdb.com/api.php?amount=20&difficulty=medium&type=multiple';
const expertLevel = 'https://opentdb.com/api.php?amount=20&difficulty=hard&type=multiple';
let apiAddress;

let data = {};
let n = 0;
let userName = sessionStorage.getItem('userName');
let difficulty;
let currentQuestion;
let correctIndex = null;
let correctAnswer;
let answers;
let options;

const game = document.getElementById('game-area');
const questionCount = document.getElementById('question-count');
const question = document.getElementById('question-text');
const optionButtons = document.getElementsByClassName('answer');
const next = document.getElementById('next');

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

// Hide difficulty buttons, show the game area
export function difficultyToGame() {
    document.getElementById('difficulty').classList.add('hide');
    game.classList.remove('hide');
    getQuestion();
}

// Call API
export async function callAPI(apiAddress) {
    const response = await fetch(apiAddress);
    // assign response to variable when promise resolves
    if (response.status > 199 && response.status < 300) {
        data = await response.json();
        difficultyToGame();
        console.log(data);
        return data;
    } else {
    // navigate to the error page if response is not successful 
        window.location.assign('500.html');
    }
}

// Shuffle answers
export function shuffle(array) {
    array.reverse().forEach((item, index) => {
        const j = Math.floor(Math.random() * (index + 1));
        [array[index], array[j]] = [array[j], array[index]];
    });
    return array;
}

// Output a question
export function getQuestion() {
    currentQuestion = data.results[n];
    if(n <=19) {
        //set the question and answers
        question.innerHTML = currentQuestion.question;

        correctAnswer = currentQuestion.correct_answer;
        // create an array with answer options for the questions
        answers = [...currentQuestion.incorrect_answers, correctAnswer];
        shuffle(answers);
        // get the index of the correct answer
        correctIndex = answers.indexOf(correctAnswer);
        // set the data-index on the element with the correct answer
        optionButtons[correctIndex].dataset.index = correctIndex;

        // Set answer options and add event listeners to option buttons
        options = Array.from(optionButtons);
    for (let i = 0; i < options.length; i++) {
        // display answer options on the buttons
        options[i].innerHTML += '  ' + `${answers[i]}`;
        // add event listeners to answer buttons
        // if (options[i].getAttribute('data-listener') !== 'true') {
        //     options[i].addEventListener('click', checkAnswer);
        //     options[i].setAttribute('data-listener', 'true');
        // }
    }
        questionCount.innerText = `${n+1}` + '/20';
        n++;
        // hide next button
        next.classList.add('hide');
    } else {
        game.classList.add('hide');
        // openModal();
    }
}
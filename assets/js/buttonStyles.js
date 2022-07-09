const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');
const answer4 = document.getElementById('answer4');

// if the answer is correct
export function buttonStylesChoiceCorrect(selectedAnswer, optionButtons) {
    // style correct
    selectedAnswer.classList.add('correct', 'blue-glow');
    selectedAnswer.classList.remove('pink-glow');
    // style incorrect
    for (let answer of optionButtons) {
        if (!answer.hasAttribute('data-index')) {
            answer.classList.add('white-glow', 'fade');
            answer.classList.remove('pink-glow');
        }
    }
}

// if the answer is wrong
export function buttonStylesChoiceWrong(selectedAnswer, optionButtons) {
    for (let answer of optionButtons) {
        // display correct
        if (answer.hasAttribute('data-index')) {
            answer.classList.add('correct', 'blue-glow');
            answer.classList.remove('pink-glow');

            // add styling for incorrect
        } else if (answer === selectedAnswer) {
            answer.classList.add('white-glow', 'fade', 'incorrect');
            answer.classList.remove('pink-glow')
        } else {
            answer.classList.add('white-glow', 'fade');
            answer.classList.remove('pink-glow')
        }
    }
}

// buttons styling for a new question
export function buttonsBeforeQuestion(optionButtons) {
    for (let option of optionButtons) {
        // strip all classes and attributes from the previous round
        option.removeAttribute('data-index');
        option.classList.remove('correct', 'incorrect', 'blue-glow', 'white-glow', 'fade');
        option.classList.add('pink-glow');
    }
    // remove answers from previous round
    [answer1.innerText, answer2.innerText, answer3.innerText, answer4.innerText] = ['A.', 'B.', 'C.', 'D.']
}
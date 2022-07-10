import fs from 'fs';
import path from 'path';

import { describe, it, expect, vi } from 'vitest';
import { Window } from 'happy-dom';

const htmlDocPath = path.join(process.cwd(), 'game.html');
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
vi.stubGlobal('document', document);

document.body.innerHTML = '';
document.write(htmlDocumentContent);

global.$ = require('jquery')(window);
global.$ = require('jquery');

global.alert = vi.fn();
global.location.assign = vi.fn();

import {
    setDifficulty,
    eventHandler,
    difficulty,
    setApiAddress,
    difficultyToGame,
    callAPI,
    shuffle,
    incrementScore,
    currentScore,
    prepareAnswers,
    correctAnswer,
    correctIndex,
    answers,
    options,
    setAnswers,
    selectedAnswer,
    checkAnswer,
    getQuestion,
    currentQuestion,
    n
} from '../game.js';

const testResponseData = {
    "response_code": 200,
    "results": [{
            "question": "Question 1?",
            "correct_answer": "Correct Answer 1",
            "incorrect_answers": ["Answer1.1", "Answer1.2", "Answer1.3"]
        },
        {
            "question": "Question 2?",
            "correct_answer": "Correct Answer 2",
            "incorrect_answers": ["Answer2.1", "Answer2.2", "Answer2.3"]
        },
        {
            "question": "Question 3?",
            "correct_answer": "Correct Answer 3",
            "incorrect_answers": ["Answer3.1", "Answer3.2", "Answer3.3"]
        },
        {
            "question": "Question 4?",
            "correct_answer": "Correct Answer 4",
            "incorrect_answers": ["Answer4.1", "Answer4.2", "Answer4.3"]
        },
        {
            "question": "Question 5?",
            "correct_answer": "Correct Answer 5",
            "incorrect_answers": ["Answer5.1", "Answer5.2", "Answer5.3"]
        },
        {
            "question": "Question 6?",
            "correct_answer": "Correct Answer 6",
            "incorrect_answers": ["Answer6.1", "Answer6.2", "Answer6.3"]
        },
        {
            "question": "Question 7?",
            "correct_answer": "Correct Answer 7",
            "incorrect_answers": ["Answer7.1", "Answer7.2", "Answer7.3"]
        },
        {
            "question": "Question 8?",
            "correct_answer": "Correct Answer 8",
            "incorrect_answers": ["Answer8.1", "Answer8.2", "Answer8.3"]
        },
        {
            "question": "Question 9?",
            "correct_answer": "Correct Answer 9",
            "incorrect_answers": ["Answer9.1", "Answer9.2", "Answer9.3"]
        },
        {
            "question": "Question 10?",
            "correct_answer": "Correct Answer 10",
            "incorrect_answers": ["Answer10.1", "Answer10.2", "Answer10.3"]
        },
        {
            "question": "Question 11?",
            "correct_answer": "Correct Answer 11",
            "incorrect_answers": ["Answer11.1", "Answer11.2", "Answer11.3"]
        },
        {
            "question": "Question 12?",
            "correct_answer": "Correct Answer 12",
            "incorrect_answers": ["Answer12.1", "Answer12.2", "Answer12.3"]
        },
        {
            "question": "Question 13?",
            "correct_answer": "Correct Answer 13",
            "incorrect_answers": ["Answer13.1", "Answer13.2", "Answer13.3"]
        },
        {
            "question": "Question 14?",
            "correct_answer": "Correct Answer 14",
            "incorrect_answers": ["Answer14.1", "Answer14.2", "Answer14.3"]
        },
        {
            "question": "Question 15?",
            "correct_answer": "Correct Answer 15",
            "incorrect_answers": ["Answer15.1", "Answer15.2", "Answer15.3"]
        },
        {
            "question": "Question 16?",
            "correct_answer": "Correct Answer 16",
            "incorrect_answers": ["Answer16.1", "Answer16.2", "Answer16.3"]
        },
        {
            "question": "Question 17?",
            "correct_answer": "Correct Answer 17",
            "incorrect_answers": ["Answer17.1", "Answer17.2", "Answer17.3"]
        },
        {
            "question": "Question 18?",
            "correct_answer": "Correct Answer 18",
            "incorrect_answers": ["Answer18.1", "Answer18.2", "Answer18.3"]
        },
        {
            "question": "Question 19?",
            "correct_answer": "Correct Answer 19",
            "incorrect_answers": ["Answer19.1", "Answer19.2", "Answer19.3"]
        },
        {
            "question": "Question 20?",
            "correct_answer": "Correct Answer 20",
            "incorrect_answers": ["Answer20.1", "Answer20.2", "Answer20.3"]
        }
    ]
};

const testFetch = vi.fn((url, options) => {
    return new Promise((resolve, reject) => {
        const testResponse = {
            status: 200,
            ok: true,
            json() {
                return new Promise((resolve, reject) => {
                    resolve(testResponseData);
                })
            }
        }
        resolve(testResponse);
    })
});

vi.stubGlobal('fetch', testFetch);

vi.mock('../animation');
vi.mock('../scores');
vi.mock('../modal');
vi.mock('../preset');

describe('setDifficulty()', () => {
    setDifficulty();
    const buttons = document.getElementsByClassName('difficulty');

    it.each(buttons)('should set data-listener on difficulty buttons to true', (button) => {
        expect(button.getAttribute('data-listener')).toBe('true');
    })
})

describe('eventHandler()', () => {
    const buttons = document.getElementsByClassName('difficulty');

    it.each(buttons)('should assign "difficulty" variable, when clicked', (button) => {
        const e = new Event('click');
        button.dispatchEvent(e);
        const result = eventHandler(e);

        expect(typeof (result)).toBe('string');
        expect(difficulty).toBeDefined();
    })
})

describe('setApiAddress()', () => {
    const easyLevel = 'https://opentdb.com/api.php?amount=20&difficulty=easy&type=multiple';
    const mediumLevel = 'https://opentdb.com/api.php?amount=20&difficulty=medium&type=multiple';
    const expertLevel = 'https://opentdb.com/api.php?amount=20&difficulty=hard&type=multiple';

    const difficulty1 = 'easy';
    const difficulty2 = 'medium';
    const difficulty3 = 'hard';

    let result1 = setApiAddress(difficulty1);
    let result2 = setApiAddress(difficulty2);
    let result3 = setApiAddress(difficulty3);

    it('should set apiAddress to easyLevel when difficulty "easy" is passed', () => {
        expect(result1).toBe(easyLevel);
    });
    it('should set apiAddress to mediumLevel when difficulty "medium" is passed', () => {
        expect(result2).toBe(mediumLevel);
    });
    it('should set apiAddress to expertLevel when anything but "easy" and "medium" is passed', () => {
        expect(result3).toBe(expertLevel);
    })
})

describe('difficultyToGame()', () => {
    const difficultyArea = document.getElementById('difficulty');
    const gameArea = document.getElementById('game-area');

    difficultyToGame();
    
    it('should hide difficulty section', () => {
        expect(difficultyArea.classList.contains('hide')).toBe(true);
    });
    it('should display game area', () => {
        expect(gameArea.classList.contains('hide')).toBe(false);
    })
})

describe('callAPI()', () => {
    const testAPI = 'https://dummy-site.dev/restapi';

    it('resolved value of the promise should be defined', async () => {
        const result = await callAPI(testAPI);
        expect(result).toBeDefined();
    })

    it('should return any available response data', () => {
        return expect(callAPI(testAPI)).resolves.toEqual(testResponseData);
    })

    it('should navigate to the error page if status of response is not 200-299', async () => {
        testFetch.mockImplementationOnce((url, options) => {
            return new Promise((resolve, reject) => {
                const testResponse = {
                    status: 500
                }
                resolve(testResponse);
            })
        });

        await callAPI(testAPI);

        expect(global.location.assign).toBeCalled();
        expect(global.location.assign).toBeCalledWith('500.html');
    })
})

describe('shuffle()', () => {
    it('should shuffle items in the array', () => {
        const testArray = [1, 2, 3, 4, 5];
        const result = shuffle(testArray);
        console.log(result);
        expect(result).not.toEqual([5, 4, 3, 2, 1]);
        expect(result).not.toEqual([1, 2, 3, 4, 5]);
    })
})

describe('incrementScore()', () => {
    const score = document.getElementById('score');
    const difficulty1 = 'easy';
    const difficulty2 = 'medium';
    const difficulty3 = 'expert';

    it('should increment score by 10 if difficulty is "easy"', () => {
        const currentScoreBefore = currentScore;
        incrementScore(difficulty1);
        const currentScoreAfter = score.innerText;
        const result = currentScoreAfter - currentScoreBefore;

        expect(currentScoreAfter).not.toBe(currentScoreBefore);
        expect(result).toBe(10);
    })

    it('should increment score by 20 if difficulty is "medium"', () => {
        const currentScoreBefore = currentScore;
        incrementScore(difficulty2);
        const currentScoreAfter = score.innerText;
        const result = currentScoreAfter - currentScoreBefore;

        expect(currentScoreAfter).not.toBe(currentScoreBefore);
        expect(result).toBe(20);
    })

    it('should increment score by 30 if difficulty is "expert"', () => {
        const currentScoreBefore = currentScore;
        incrementScore(difficulty3);
        const currentScoreAfter = score.innerText;
        const result = currentScoreAfter - currentScoreBefore;

        expect(currentScoreAfter).not.toBe(currentScoreBefore);
        expect(result).toBe(30);
    })
})

describe('prepareAnswers()', () => {
    let testQuestion = {
        "question": "Question 20?",
        "correct_answer": "Correct Answer 20",
        "incorrect_answers": ["Answer20.1", "Answer20.2", "Answer20.3"]
    };
    const optionButtons = document.getElementsByClassName('answer');

    prepareAnswers(testQuestion);
    it('should define correctAnswer', () => {
        expect(correctAnswer).toBe(testQuestion.correct_answer);
    })
    it('should create an array of incorrect answers and the correct answer', () => {
        expect(answers.length == 4).toBe(true);
    })
    it('should assign value to correctIndex', () => {
        expect(correctIndex).not.toBe(null);
    })
    it('should assign "data-index" attribute to a button from optionButtons', () => {
        expect(optionButtons[correctIndex].hasAttribute('data-index')).toBe(true);
    })
})

describe('setAnswers()', () => {
    const optionButtons = document.getElementsByClassName('answer');
    const answers = ['answer1', 'answer2', 'answer3', 'answer4'];
    setAnswers(answers);
    it('should make an array of optionButtons', () => {
        expect(options.length).toBe(4);
    })
    it('should assign answers to answer buttons', () => {
        for (let i = 0; i < options.length; i++) {
            expect(options[i].innerHTML.includes(answers[i])).toBe(true);
        }
    })
    it.each(optionButtons)('should set data-listener on difficulty buttons to true', (button) => {
        expect(button.getAttribute('data-listener')).toBe('true');
    })
})

describe('checkAnswer()', () => {
    const optionButtons = document.getElementsByClassName('answer');
    const next = document.getElementById('next');

    it.each(optionButtons)('should assign a clicked button to selectedAnswers', (button) => {
        const e = new Event('click');
        button.dispatchEvent(e);
        checkAnswer(e);

        expect(selectedAnswer).toBeDefined();
    })

    it.each(optionButtons)('should remove class "hide" from the "next" button', (button) => {
        const e = new Event('click');
        button.dispatchEvent(e);
        checkAnswer(e);

        expect(next.classList.contains('hide')).toBe(false);
    })

    it.each(optionButtons)('should add event listener to the "next" button', (button) => {
        const e = new Event('click');
        button.dispatchEvent(e);
        checkAnswer(e);

        expect(next.getAttribute('data-listener')).toBe('true');
    })

    it.each(optionButtons)('should return "wrong" if a clicked button does not have "data-index" attribute and "correct" if it does', (button) => {
        const e = new Event('click');
        button.dispatchEvent(e);
        let result = checkAnswer(e);

        if(!selectedAnswer.hasAttribute('data-index')) {
            expect(result).toBe('wrong');
        } else {
            expect(result).toBe('correct');
        }
    })
})

describe('getQuestion()', () => {
    const question = document.getElementById('question-text');
    const questionCount = document.getElementById('question-count');
    const game = document.getElementById('game-area');
    const yourScore = document.getElementById('your-score');
    const next = document.getElementById('next');

    it('should display question count', () => {
        getQuestion();
        expect(questionCount.innerText.length > 0).toBe(true);
    });

    it('should display question', () => {
        getQuestion();
        expect(question.innerText.length > 0).toBe(true);
    });

    it('should define currentQuestion', () => {
        getQuestion();
        expect(currentQuestion).toBeDefined;
    });

    it('should hide "next" button', () => {
        expect(next.classList.contains('hide')).toBe(true);
    })

    it('should increment question count', () => {
        const n1 = n;
        getQuestion();
        const n2 = n;
        expect(n1).not.toBe(n2);
    });

    it('should hide game area after 20 questions', () => {
        for (let x = 0; x <= 16; x++) {
            getQuestion();
        }
        expect(game.classList.contains('hide')).toBe(true);
    })

    it('should display your score', () => {
        expect(yourScore.innerText.length > 0).toBe(true);
        expect(yourScore.innerText.includes('Well done')).toBe(true);
    })
})
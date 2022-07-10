import { getQuestion } from './game.js';
import { burst } from './animation.js';
import { setScores } from './scores.js';

const optionButtons = document.getElementsByClassName('answer');

export function gamePreset() {
    getQuestion();
    //call scores API to get Top Score
    setScores();
    //call burst animation effect for correct answers
    burst();
}
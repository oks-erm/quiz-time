import { callScores } from './scoresapi.js';
export let currentResult;
export let scoresData = [ // backup scores data if api call fails
    {
        "Score": "50",
        "Name": "Jake the dog",
        "Date": "2022/06/07"
    },
    {
        "Score": "60",
        "Name": "The queen of everything",
        "Date": "2022/06/07"
    },
    {
        "Score": "100",
        "Name": "God",
        "Date": "00/00/00"
    }
];

// Sort array of objects by highest score
export function sortScores(array) {
    array.sort((a, b) => {
        return b.Score - a.Score;
    });
}

export async function setScores() {
    let scores = await callScores();
    // write received data to scoresData and assign Top Score
    if (scores.length > 0) {
        scoresData = scores;
        sortScores(scoresData);
        document.getElementById('top-score').innerText = scoresData[0].Score;
        return scoresData;
    }
}
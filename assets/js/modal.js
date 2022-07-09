import { sortScores } from "./scores.js";

const modal = document.getElementById('modal-wrapper');
const playAgain = document.getElementById('play-again');
const tbody = document.getElementsByTagName('tbody')[0];
let scoresData = [ // backup scores data if api call fails
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

// Open modal
export function openModal(scoresData) {
    // show modal
    modal.classList.add('show');
    buildTable(scoresData);
    //set event listener to the Play again button
    if (playAgain.getAttribute('data-listener') !== 'true') {
        playAgain.addEventListener('click', (e) => window.location.assign('funfact.html'));
        playAgain.setAttribute('data-listener', 'true');
    };
}

// Build highscores table from sorted array with top scores
export function buildTable(array) {
    sortScores(array);
    let top = array.slice(0, 8);
    for (let object of top) {
        let row = document.createElement('tr')
        row.innerHTML = `
                    <td>${object.Score}</td>
                    <td>${object.Name}</td>
                    <td>${object.Date}</td>
                   `
        tbody.append(row);
    }
}
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

global.location.assign = vi.fn();

import { openModal, buildTable, highScores, closeModal } from '../modal.js';
import { confettiBurst } from '../animation.js';
import { sortScores } from '../scores.js';

confettiBurst = vi.fn(() => {});
sortScores = vi.fn(() => {});
vi.mock('../animation', () => vi.fn());
vi.mock('../scores', () => vi.fn());

describe('openModal()', () => {
    it('should add class "show" to modal', () => {
        const testModal = document.getElementById('modal-wrapper');
        openModal(testModal);
    
        expect(testModal.classList.contains('show')).toBe(true);
    })
})

describe('closeModal()', () => {
    it('should add class "show" to modal', () => {
        const testModal = document.getElementById('modal-wrapper');
        openModal(testModal);
        closeModal(testModal);
        expect(testModal.classList.contains('show')).toBe(false);
    })
})

describe('highScores()', () => {
    const playAgain = document.getElementById('play-again');
    const testArray = [];

    highScores(testArray);

    it('should set data-listener attribute on the Play Again button to true', () => {
        expect(playAgain.getAttribute('data-listener')).toBe('true');
    })

    it('should navigate to another page when the Play Again button is clicked', () => {
        const event = new Event('click');
        playAgain.dispatchEvent(event);

        expect(global.location.assign).toBeCalled();
        expect(global.location.assign).toBeCalledWith('funfact.html');
    })

    it('should call confettiBurst()', () => {
        expect(confettiBurst).toBeCalled();
    })

    it('should call sortScores()', () => {
        expect(sortScores).toBeCalled();
    })
})

describe('buildTable()', () => {
    const tbody = document.querySelector('tbody');

    const testArray = [{
        "Score": "TestScore",
        "Name": "TestName",
        "Date": "TestDate"
    },
    {
        "Score": "TestScore2",
        "Name": "TestName2",
        "Date": "TestDate2"
    },
    {
        "Score": "TestScore3",
        "Name": "TestName3",
        "Date": "TestDate3"
    },
    {
        "Score": "TestScore4",
        "Name": "TestName4",
        "Date": "TestDate4"
    },
    {
        "Score": "TestScore5",
        "Name": "TestName5",
        "Date": "TestDate5"
    },
    {
        "Score": "TestScore6",
        "Name": "TestName6",
        "Date": "TestDate6"
    },
    {
        "Score": "TestScore7",
        "Name": "TestName7",
        "Date": "TestDate7"
    },
    {
        "Score": "TestScore8",
        "Name": "TestName8",
        "Date": "TestDate8"
    },
    {
        "Score": "TestScore9",
        "Name": "TestName9",
        "Date": "TestDate9"
    }];

    buildTable(testArray);

    const rowsCount = tbody.childElementCount;
    const row = tbody.firstElementChild;
    const cells = document.getElementsByTagName('td');

    it('should slice first 8 items of the array if there are more', () => {
        expect(rowsCount <= 8).toBe(true);
    })

    it('should create <tr> element for each item of the array', () => {
        expect(rowsCount === testArray.length || rowsCount === 8).toBe(true);
    })

    it('should create 3 cells for each row', () => {
        expect(row.childElementCount).toBe(3);
    })

    it('should build a table with the array content', () => {
        expect(cells[0].innerText).toBe(testArray[0].Score);
        expect(cells[1].innerText).toBe(testArray[0].Name);
        expect(cells[2].innerText).toBe(testArray[0].Date);
    })
})
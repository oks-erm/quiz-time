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

import { setScores, sortScores, handleScores, currentResult } from '../scores.js';
import { callScores, postScores } from '../scoresapi.js';

global.$ = require('jquery')(window);
global.$ = require('jquery');

const testScoresData = [{
    "Score": 1,
    "Name": "TestName",
    "Date": "TestDate"
},
{
    "Score": 2,
    "Name": "TestName2",
    "Date": "TestDate2"
},
{
    "Score": 10,
    "Name": "TestName3",
    "Date": "TestDate3"
},
{
    "Score": 3,
    "Name": "TestName4",
    "Date": "TestDate4"
},
{
    "Score": 4,
    "Name": "TestName5",
    "Date": "TestDate5"
},
{
    "Score": 5,
    "Name": "TestName6",
    "Date": "TestDate6"
},
{
    "Score": 6,
    "Name": "TestName7",
    "Date": "TestDate7"
},
{
    "Score": 7,
    "Name": "TestName8",
    "Date": "TestDate8"
},
{
    "Score": 8,
    "Name": "TestName9",
    "Date": "TestDate9"
}];

postScores = vi.fn();
callScores = vi.fn(() => {return testScoresData});
vi.mock('../scoresapi', () => vi.fn());

describe('setScores()', () => {
    it('should assign received data to scoresData and return it', async() => {
        const scoresData = await setScores();
        expect(scoresData).toBe(testScoresData);
    })

    it('should set top score element to the highest score in the array', () => {
        const topScore = document.getElementById('top-score').innerText
        return expect(parseInt(topScore)).toBe(testScoresData[0].Score);
    })
})

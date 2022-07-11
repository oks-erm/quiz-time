import fs from 'fs';
import path from 'path';

import {
    describe,
    it,
    expect,
    vi
} from "vitest";
import {
    Window
} from 'happy-dom';

const htmlDocPath = path.join(process.cwd(), 'funfact.html');
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
vi.stubGlobal('document', document);

global.alert = vi.fn();
global.location.assign = vi.fn();

document.body.innerHTML = '';
document.write(htmlDocumentContent);

import { getData } from '../getfact.js';
getData = vi.fn(() => {return "Funfact"});
vi.mock('../getfact', () => vi.fn());
global.$ = require('jquery')(window);
global.$ = require('jquery');
import { writeData, setEventListeners } from '../funfact.js';

describe('writeData()', () => {
    const par = document.getElementById('funfact-text').innerHTML;

    it('should write an item from facts array into the paragraph', () => {
        const fact = 'Test';

        writeData(fact);
        const parAfter = document.getElementById('funfact-text').innerHTML;

        expect(parAfter).toBe(fact);
        expect(par).not.toBe(parAfter);
    })

    it('should display backup fact if api call fails', () => {
        const fact = '';

        writeData(fact);
        const parAfter = document.getElementById('funfact-text').innerHTML;

        expect(parAfter).toBe("It's impossible to hum while holding your nose.");
    })
})

describe('setEventListeners()', () => {
    global.location.assign = vi.fn();
    setEventListeners();

    const playAgain = document.getElementById('play-again');
    const changeName = document.getElementById('change-name');
    it('should set data-listener to true', () => {
        expect(playAgain.getAttribute('data-listener')).toBe('true');
        expect(changeName.getAttribute('data-listener')).toBe('true');
    })

    it('should navigate to another pages when buttons are clicked', () => {
        const event = new Event('click');
        playAgain.dispatchEvent(event);
        changeName.dispatchEvent(event);

        expect(global.location.assign).toBeCalled();
        expect(global.location.assign).toBeCalledWith('game.html');
        expect(global.location.assign).toBeCalledWith('index.html');
    })
})
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

        expect(parAfter).toBe("It's impossible to hum while holding your nose.")
    })
});

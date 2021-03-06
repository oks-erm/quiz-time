import fs from 'fs';
import path from 'path';

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Window } from 'happy-dom';

const htmlDocPath = path.join(process.cwd(), 'index.html');
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
vi.stubGlobal('document', document);

global.location.assign = vi.fn();

document.body.innerHTML = '';
document.write(htmlDocumentContent);

global.$ = require('jquery')(window);
global.$ = require('jquery');

import { formHandler, validateInput } from '../home.js';
import { openModal, closeModal } from '../modal.js';


openModal = vi.fn(() => {});
closeModal = vi.fn(() => {});
vi.mock('../modal', () => vi.fn());

describe('validateInput()', () => {
    beforeEach(() => {
        document.body.innerHTML = '';
        document.write(htmlDocumentContent);
    })

    const close = document.getElementById('close');

    it('should display an alert box if input field is empty', () => {
        const testInput = '';

        validateInput(testInput);

        expect(openModal).toBeCalled();
        expect(close.getAttribute('data-listener')).toBe('true');
    })

    it('should display an alert box if spaces are provided as a value', () => {
        const testInput = '     ';
        validateInput(testInput);

        expect(openModal).toBeCalled();
        expect(close.getAttribute('data-listener')).toBe('true');
    });

    it('should store the valid input value to a session storage', () => {
        const testInput = 'Test';
        validateInput(testInput);

        expect(sessionStorage.getItem('userName')).toEqual(testInput);
    })

    it('should navigate to another page', () => {
        const testInput = 'Test';

        validateInput(testInput);

        expect(global.location.assign).toBeCalled();
        expect(global.location.assign).toBeCalledWith('game.html');
    })
})

describe('formHandler()', () => {
    const form = document.querySelector('form');
    const event = new Event('submit');
    document.dispatchEvent(event);

    event.preventDefault = vi.fn();
    formHandler(event);

    it("expect data-listener to be true", () => {
        expect(form.getAttribute('data-listener')).toEqual('true');
    })

    it('should prevent default behaviour', () => {
        expect(event.preventDefault).toBeCalled();
    })
})
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

global.alert = vi.fn();
global.location.assign = vi.fn();

import { openModal, buildTable } from '../modal.js';
vi.mock('../animation');
vi.mock('../scores');

describe('openModal()', () => {
    const modal = document.getElementById('modal-wrapper');
    const playAgain = document.getElementById('play-again');

    const testArray = [];

    openModal(testArray);

    it('should add class "show" to modal', () => {
        expect(modal.classList.contains('show')).toBe(true);
    })

    it('should set data-listener attribute on the Play Again button to true', () => {
        expect(playAgain.getAttribute('data-listener')).toBe('true');
    })

    it('should navigate to another page when the Play Again button is clicked', () => {
        const event = new Event('click');
        playAgain.dispatchEvent(event);

        expect(global.location.assign).toBeCalled();
        expect(global.location.assign).toBeCalledWith('funfact.html');
    })
})

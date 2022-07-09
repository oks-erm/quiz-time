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

import { buttonStylesChoiceCorrect, buttonStylesChoiceWrong, buttonsBeforeQuestion } from '../buttonStyles';

describe('buttonStylesChoiceCorrect()', () => {
    const optionButtons = document.getElementsByClassName('answer');
    optionButtons[1].dataset.index = '1';
    let testSelected = optionButtons[1];
    buttonStylesChoiceCorrect(testSelected, optionButtons);

    it('should add classes "correct" and "blue-glow" to the selected button', () => {
        expect(testSelected.classList.contains('correct')).toBe(true);
        expect(testSelected.classList.contains('blue-glow')).toBe(true);
        expect(testSelected.classList.contains('fade')).toBe(false);
    });

    it.each(optionButtons)('should remove class "pink-glow" from all buttons', (button) => {
        expect(button.classList.contains('pink-glow')).toBe(false);
    });

    it('should add class "white-glow" to incorrect answer buttons', () => {
        expect(optionButtons[0].classList.contains('white-glow')).toBe(true);
        expect(optionButtons[2].classList.contains('white-glow')).toBe(true);
        expect(optionButtons[3].classList.contains('white-glow')).toBe(true);
    });

    it('should add class "fade" to incorrect answer buttons', () => {
        expect(optionButtons[0].classList.contains('fade')).toBe(true);
        expect(optionButtons[2].classList.contains('fade')).toBe(true);
        expect(optionButtons[3].classList.contains('fade')).toBe(true);
    });

    it('should not add class "correct" to other buttons rather than the selected button', () => {
        expect(optionButtons[0].classList.contains('correct')).toBe(false);
        expect(optionButtons[2].classList.contains('correct')).toBe(false);
        expect(optionButtons[3].classList.contains('correct')).toBe(false);
    });

    it('should not add class "blue-glow" to other buttons rather than the correct answer', () => {
        expect(optionButtons[0].classList.contains('blue-glow')).toBe(false);
        expect(optionButtons[2].classList.contains('blue-glow')).toBe(false);
        expect(optionButtons[3].classList.contains('blue-glow')).toBe(false);
    });
})

describe('buttonStylesChoiceWrong()', () => {
    document.body.innerHTML = '';
    document.write(htmlDocumentContent);

    const optionButtons = document.getElementsByClassName('answer');
    optionButtons[1].dataset.index = '1';
    let testSelected = optionButtons[0];

    buttonStylesChoiceWrong(testSelected, optionButtons);
    it('should add classes "incorrect","white-glow" and "fade" to the selected button', () => {
        expect(testSelected.classList.contains('incorrect')).toBe(true);
        expect(testSelected.classList.contains('white-glow')).toBe(true);
        expect(testSelected.classList.contains('fade')).toBe(true);
    });

    it.each(optionButtons)('should remove class "pink-glow" from all buttons', (button) => {
        expect(button.classList.contains('pink-glow')).toBe(false);
    });

    it('should add class "white-glow" to incorrect answer buttons', () => {
        expect(optionButtons[2].classList.contains('white-glow')).toBe(true);
        expect(optionButtons[3].classList.contains('white-glow')).toBe(true);
    });

    it('should add class "fade" to incorrect answer buttons', () => {
        expect(optionButtons[2].classList.contains('fade')).toBe(true);
        expect(optionButtons[3].classList.contains('fade')).toBe(true);
    });

    it('should not add class "incorrect" to other buttons rather than the selected button', () => {
        expect(optionButtons[1].classList.contains('incorrect')).toBe(false);
        expect(optionButtons[2].classList.contains('incorrect')).toBe(false);
        expect(optionButtons[3].classList.contains('incorrect')).toBe(false);
    });

    it('should not add class "blue-glow" to other buttons rather than the correct answer', () => {
        expect(optionButtons[0].classList.contains('blue-glow')).toBe(false);
        expect(optionButtons[2].classList.contains('blue-glow')).toBe(false);
        expect(optionButtons[3].classList.contains('blue-glow')).toBe(false);
    });

    it('should add class "correct" to the correct answer', () => {
        expect(optionButtons[1].classList.contains('correct')).toBe(true);
    });

    it('should add class "blue-glow" to the correct answer', () => {
        expect(optionButtons[1].classList.contains('blue-glow')).toBe(true);
    });
});

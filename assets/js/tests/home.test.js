import fs from 'fs';
import path from 'path';

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Window } from 'happy-dom';

const htmlDocPath = path.join(process.cwd(), 'index.html');
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

Window.prototype.alert = vi.fn();

const window = new Window();
const document = window.document;
vi.stubGlobal('document', document);

global.location.assign = vi.fn();

document.body.innerHTML = '';
document.write(htmlDocumentContent);

import { formHandler, validateInput } from '../home.js';

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
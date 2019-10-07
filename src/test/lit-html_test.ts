/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

import * as LibDefaultTemplateProcessor from '../lib/default-template-processor';
import * as LibDirective from '../lib/directive';
import * as LibPart from '../lib/part';
import * as LibParts from '../lib/parts';
import * as LibRender from '../lib/render';
import * as LibTemplateFactory from '../lib/template-factory';
import * as LibTemplateInstance from '../lib/template-instance';
import * as LibTemplateResult from '../lib/template-result';
import * as LitHtml from '../lit-html';

const assert = chai.assert;

suite('index', () => {
    test('html tag returns a TemplateResult', () => {
        assert.instanceOf(LitHtml.html``, LibTemplateResult.TemplateResult);
    });

    test('svg tag returns a SVGTemplateResult', () => {
        assert.instanceOf(LitHtml.svg``, LibTemplateResult.SVGTemplateResult);
    });

    test('exports everything from lib/template-result', () => {
        Object.keys(LibTemplateResult).forEach((key) => {
            assert.property(LitHtml, key);
        });
    });

    test('exports everything from lib/default-template-processor', () => {
        Object.keys(LibDefaultTemplateProcessor).forEach((key) => {
            assert.property(LitHtml, key);
        });
    });

    test('exports everything from lib/template-instance', () => {
        Object.keys(LibTemplateInstance).forEach((key) => {
            assert.property(LitHtml, key);
        });
    });

    test('exports everything from lib/part', () => {
        Object.keys(LibPart).forEach((key) => {
            assert.property(LitHtml, key);
        });
    });

    test('exports everything from lib/parts', () => {
        Object.keys(LibParts)
            .filter((k) => !/^__testOnly/.test(k))
            .forEach((key) => {
                assert.property(LitHtml, key);
            });
    });

    test('exports everything from lib/directive', () => {
        Object.keys(LibDirective).forEach((key) => {
            assert.property(LitHtml, key);
        });
    });

    test('exports everything from lib/render', () => {
        Object.keys(LibRender).forEach((key) => {
            assert.property(LitHtml, key);
        });
    });

    test('exports everything from lib/template-factory', () => {
        Object.keys(LibTemplateFactory).forEach((key) => {
            assert.property(LitHtml, key);
        });
    });

    test('adds a version number', () => {
        assert.equal(window['litHtmlVersions'].length, 1);
    });
});

import {createStore} from 'redux';
import reducer from './Reducer';
import {markdown} from 'markdown';

const initValues = {
    items: [
        {
            name: 'express',
            latestVersion: '2.1.1',
            versions: [
                {
                    version: '1.0.1',
                    exist: false
                },
                {
                    version: '2.0.1',
                    exist: true
                }
            ],
            intro: 'a http server framework',
            keywords: [
                'http',
                'server'
            ],
            id: 1,
            readme: markdown.toHTML("# abab [![npm version](https://badge.fury.io/js/abab.svg)](https://www.npmjs.com/package/abab) [![Build Status](https://travis-ci.org/jsdom/abab.svg?branch=master)](https://travis-ci.org/jsdom/abab)\n\nA JavaScript module that implements `window.atob` and `window.btoa` according the forgiving-base64 algorithm in the [Infra Standard](https://infra.spec.whatwg.org/#forgiving-base64). The original code was forked from [w3c/web-platform-tests](https://github.com/w3c/web-platform-tests/blob/master/html/webappapis/atob/base64.html).\n\nCompatibility: Node.js version 3+ and all major browsers.\n\nInstall with `npm`:\n\n```sh\nnpm install abab\n```\n\n## API\n\n### `btoa` (base64 encode)\n\n```js\nconst { btoa } = require('abab');\nbtoa('Hello, world!'); // 'SGVsbG8sIHdvcmxkIQ=='\n```\n\n### `atob` (base64 decode)\n\n```js \nconst { atob } = require('abab');\natob('SGVsbG8sIHdvcmxkIQ=='); // 'Hello, world!'\n```\n\n#### Valid characters\n\n[Per the spec](https://html.spec.whatwg.org/multipage/webappapis.html#atob:dom-windowbase64-btoa-3), `btoa` will accept strings \"containing only characters in the range `U+0000` to `U+00FF`.\" If passed a string with characters above `U+00FF`, `btoa` will return `null`. If `atob` is passed a string that is not base64-valid, it will also return `null`. In both cases when `null` is returned, the spec calls for throwing a `DOMException` of type `InvalidCharacterError`.\n\n## Browsers\n\nIf you want to include just one of the methods to save bytes in your client-side code, you can `require` the desired module directly.\n\n```js\nconst atob = require('abab/lib/atob');\nconst btoa = require('abab/lib/btoa');\n```\n\n-----\n\n### Checklists\n\nIf you're **submitting a PR** or **deploying to npm**, please use the [checklists in CONTRIBUTING.md](https://github.com/jsdom/abab/blob/master/CONTRIBUTING.md#checklists)\n\n### Remembering `atob` vs. `btoa`\n\nHere's a mnemonic that might be useful: if you have a plain string and want to base64 encode it, then decode it, `btoa` is what you run before (**b**efore - **b**toa), and `atob` is what you run after (**a**fter - **a**tob).\n"),
            visible: true
        },
        {
            name: 'koa',
            latestVersion: '1.2.3',
            versions: [
                {
                    version: '1.0.1',
                    exist: true
                },
                {
                    version: '2.0.1',
                    exist: true
                }
            ],
            intro: 'a http server framework',
            keywords: [
                'http',
                'server'
            ],
            id: 2,
            readme: 'readme koa',
            visible: true
        },
        {
            name: 'jquery',
            latestVersion: '3.2.1',
            versions: [
                {
                    version: '1.0.1',
                    exist: true
                },
                {
                    version: '2.0.1',
                    exist: true
                }
            ],
            intro: 'a http server framework',
            keywords: [
                'http',
                'server'
            ],
            id: 3,
            readme: 'readme jquery',
            visible: true
        }
    ]
};

const store = createStore(reducer, initValues);

export default store;
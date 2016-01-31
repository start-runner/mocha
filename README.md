[![npm](https://img.shields.io/npm/v/start-mocha.svg?style=flat-square)](https://www.npmjs.com/package/start-mocha)
[![travis](http://img.shields.io/travis/start-runner/mocha.svg?style=flat-square)](https://travis-ci.org/start-runner/mocha)
[![deps](https://img.shields.io/gemnasium/start-runner/mocha.svg?style=flat-square)](https://gemnasium.com/start-runner/mocha)

[Mocha](https://mochajs.org/) task for [Start](https://github.com/start-runner/start).

## Install

```
npm i -D start-mocha
```

## Usage

```js
// tasks/index.js
import start from 'start';
import logger from 'start-simple-logger';
import files from 'start-files';
import mocha from 'start-mocha';

export function test() {
    return start(logger)(
        files('test/**/*.js'),
        mocha()
    );
}
```

```js
// package.json
"scripts": {
  "task": "babel-node node_modules/.bin/start tasks/",
  "test": "npm run task test"
}
```

## Arguments

`clean(options)`

* `options` – [Mocha options](https://github.com/mochajs/mocha/blob/d811eb9614e5b459dabb4f2496e69f961decec90/lib/mocha.js#L59-L70)

# start-mocha

[![npm](https://img.shields.io/npm/v/start-mocha.svg?style=flat-square)](https://www.npmjs.com/package/start-mocha)
[![linux build](https://img.shields.io/travis/start-runner/mocha/master.svg?label=linux&style=flat-square)](https://travis-ci.org/start-runner/mocha)
[![windows build](https://img.shields.io/appveyor/ci/start-runner/mocha/master.svg?label=windows&style=flat-square)](https://ci.appveyor.com/project/start-runner/mocha)
[![coverage](https://img.shields.io/codecov/c/github/start-runner/mocha/master.svg?style=flat-square)](https://codecov.io/github/start-runner/mocha)
[![deps](https://img.shields.io/gemnasium/start-runner/mocha.svg?style=flat-square)](https://gemnasium.com/start-runner/mocha)

[Mocha](https://mochajs.org/) task for [Start](https://github.com/start-runner/start).

## Install

```sh
npm install --save-dev start-mocha
# or
yarn add --dev start-mocha
```

## Usage

```js
import Start from 'start';
import reporter from 'start-pretty-reporter';
import files from 'start-files';
import watch from 'start-watch';
import mocha from 'start-mocha';

const start = Start(reporter());

export const test = () => start(
  files('test/**/*.js'),
  mocha()
);

export const tdd = () => start(
  files([ 'lib/**/*.js', 'test/**/*.js' ]),
  watch(test)
);
```

This task relies on array of files, see [documentation](https://github.com/start-runner/start#readme) for details.

## Arguments

`mocha(options)`

* `options` – [Mocha options](https://github.com/mochajs/mocha/blob/d811eb9614e5b459dabb4f2496e69f961decec90/lib/mocha.js#L59-L70)

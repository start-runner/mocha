export default (options) => (input) => {
    return function mocha(/* log */) {
        const Mocha = require('mocha');

        return new Promise((resolve, reject) => {
            const mochaRunner = new Mocha(options);
            // workaround to re-run mocha in TDD mode
            // https://github.com/sindresorhus/gulp-mocha/blob/master/index.js
            // https://github.com/pghalliday/grunt-mocha-test/issues/112
            const cache = {};

            Object.keys(require.cache).forEach(key => {
                cache[key] = true;
            });

            input.forEach(file => mochaRunner.addFile(file));

            mochaRunner.run(function(errCount) {
                Object.keys(require.cache)
                    .filter(key => !cache[key] && !/\.node$/.test(key))
                    .forEach(key => {
                        delete require.cache[key];
                    });

                if (errCount > 0) {
                    return reject();
                }

                resolve();
            });
        });
    };
};

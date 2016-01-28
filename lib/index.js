export default function(patterns, options) {
    return function mocha(resolve, reject) {
        process.env.NODE_ENV = 'test';

        const globby = require('globby');
        const Mocha = require('mocha');

        globby(patterns, { realpath: true }).then(function(files) {
            const mochaRunner = new Mocha(options);

            files.forEach(file => mochaRunner.addFile(file));

            mochaRunner.run(function(errCount) {
                if (errCount > 0) {
                    return reject();
                }

                resolve();
            });
        });
    };
}

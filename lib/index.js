export default function(patterns, options, requires) {
    return function mocha() {
        process.env.NODE_ENV = 'test';

        const globby = require('globby');
        const Mocha = require('mocha');

        return new Promise(function(resolve, reject) {
            globby(patterns)
                .then(function(files) {
                    const mochaRunner = new Mocha(options);

                    files.forEach(file => mochaRunner.addFile(file));

                    mochaRunner.run(function(errCount) {
                        if (errCount > 0) {
                            return reject();
                        }

                        resolve();
                    });
                })
                .catch(reject);
        });
    };
}

export default function(patterns, options, requires) {
    return function mocha() {
        process.env.NODE_ENV = 'test';

        const glob = require('glob');
        const Mocha = require('mocha');

        return new Promise(function(resolve, reject) {
            glob(patterns, function(err, files) {
                if (err) {
                    return reject(err);
                }

                const mochaRunner = new Mocha(options);

                files.forEach(file => mochaRunner.addFile(file));

                mochaRunner.run(function(errCount) {
                    if (errCount > 0) {
                        return reject();
                    }

                    resolve();
                });
            });
        });
    };
}

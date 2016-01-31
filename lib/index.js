export default (options) => (input) => {
    return function mocha(/* log */) {
        const Mocha = require('mocha');

        return new Promise((resolve, reject) => {
            const mochaRunner = new Mocha(options);

            input.forEach(file => mochaRunner.addFile(file));

            mochaRunner.run(function(errCount) {
                if (errCount > 0) {
                    return reject();
                }

                resolve();
            });
        });
    };
};

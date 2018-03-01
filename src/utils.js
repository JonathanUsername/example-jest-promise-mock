var Promise = require('../src/mockablePromise');

module.exports = {
    makePromise: () => new Promise(resolve => resolve(1)).then(i => i * 2)
}

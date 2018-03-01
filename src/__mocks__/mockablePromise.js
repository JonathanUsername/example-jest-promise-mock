var Promise = require('promise-polyfill');
var PromiseMock = require('promise-mock');

Promise._immediateFn = function mockImmediateFn(fn) {
    PromiseMock.waiting.push(fn);
};

module.exports = PromiseMock;

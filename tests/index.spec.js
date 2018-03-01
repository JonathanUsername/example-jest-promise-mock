var PromiseMock = require('promise-mock');
var utils = require('../src/utils');

// Let's make this fail fast.
jest.setTimeout(100);

describe('using install', function() {
	beforeEach(function() {
		PromiseMock.install();
	});
	afterEach(function() {
		PromiseMock.uninstall();
	});

	it('should add a promise to waiting', function() {
		var p = utils.makePromise();
		expect(Promise.waiting.length).toEqual(1);
        Promise.runAll();
        expect(Promise.waiting.length).toEqual(0);
	})
});

var utils = require('../src/utils');

jest.mock('../src/mockablePromise');
var Promise = require('../src/mockablePromise');

// Let's make this fail fast.
jest.setTimeout(100);

describe("using jest mock", function() {
    beforeEach(() => {
        Promise.clear();
    })
	it('should add a promise to waiting', function() {
		var p = utils.makePromise();
		expect(Promise.waiting.length).toEqual(1);
        Promise.runAll();
        expect(Promise.waiting.length).toEqual(0);
	})
});

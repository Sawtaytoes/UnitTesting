let mathyDir = require.resolve('../mathy.js');
delete require.cache[mathyDir];

var assert = require('assert'),
	Mathy = require(mathyDir);

module.exports = function() {
	var mathy;

	this.Given(/^a number (\d+)$/, (num, next) => {
		mathy = new Mathy({ value: num });
		assert.equal(mathy.get(), num);
		next().pending();
	});

	this.When(/^set to (\d+)$/, function (num, next) {
		mathy.set(num);
		next().pending();
	});

	this.When(/^added to (\d+)$/, function (num, next) {
		mathy.add(num);
		next().pending();
	});

	this.When(/^subtracted from (\d+)$/, function (num, next) {
		mathy.sub(num);
		next().pending();
	});

	this.Then(/^you get (\d+)$/, (num, next) => {
		assert.equal(mathy.get(), num);
		next().pending();
	});
};

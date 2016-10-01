let mathyDir = require.resolve('../mathy.js');
delete require.cache[mathyDir];

var assert = require('assert'),
	Mathy = require(mathyDir);

module.exports = function() {
	var mathy;

	this.Given("a number $num", (num, next) => {
		num = Number(num);
		mathy = new Mathy({ value: num });

		assert.equal(mathy.get(), num,
			"Initial value isn't set properly."
		);

		assert.equal(typeof mathy.get(), 'number',
			"Value is a string, not a number."
		);

		next().pending();
	});

	this.When("set to $num", function (num, next) {
		num = Number(num);
		mathy.set(num);

		next().pending();
	});

	this.When("added to $num", function (num, next) {
		num = Number(num);
		mathy.add(num);

		next().pending();
	});

	this.When("subtracted by $num", function (num, next) {
		num = Number(num);
		mathy.sub(num);

		next().pending();
	});

	this.Then("it will be $num", (num, next) => {
		num = Number(num);
		assert.equal(mathy.get(), num);

		next().pending();
	});
};

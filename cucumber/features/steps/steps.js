require('../error-messages.js')

module.exports = function() {
	console.log('\n\n===============================================\n\n');

	// this.Before({ timeout: 1000 }, (scenario, callback) => {});

	this.Given(/^an item$/, (callback) => {
		throw 'kevin';
		return callback();
	});

	this.When(/^"Something else([^"]*)"$/, (callback) => {
		return callback();
	});

	this.Then(/^"do something"$/i, (callback) => {
		// throw new Error('Variable should contain ' + number + ' but it contains ' + this.variable + '.');
		return callback('something');
	});
};

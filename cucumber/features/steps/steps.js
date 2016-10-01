module.exports = function() {
	this.Given(/^.+$/, () => {
		return false
	});

	this.When(/^"([^"]*)"$/, (text) => {
		return true
	});

	this.Then(/^"([^"]*)"$/, (text) => {
		return true
	});
};

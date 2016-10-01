let validationCheckerDir = require.resolve('../validation-checker.js');
delete require.cache[validationCheckerDir];

var assert = require('assert'),
	ValidationChecker = require(validationCheckerDir),
	convertAllowDenyToBool = value => {
		if (value === 'allow') {
			return true;
		}

		return false;
	}

module.exports = function() {
	var validationChecker,
		validationValue,
		failedValidations = [];

	this.Given("a value set to $value", (value, next) => {
		let num = Number(value),
			digitStringCheck = /^"(\d+)"$/;

		if (!isNaN(num) && value) {
			value = num;
		} else if (digitStringCheck.test(value)) {
			value = String(digitStringCheck.exec(value)[1]);
		} else if (value === 'false') {
			value = false;
		} else if (value === 'null') {
			value = null;
		} else if (value === 'undefined') {
			value = undefined;
		}

		validationValue = value;
		next().pending();
	});

	this.Given("I setup a validation check for $validation", (validation, next) => {
		let validationCheckerOptions;
		validation && (validationCheckerOptions = { validations: [validation] })
		validationChecker = new ValidationChecker(validationCheckerOptions);

		assert.equal(typeof validationChecker, 'object',
			"Value is not an object."
		);

		assert.equal(validationChecker instanceof ValidationChecker, true,
			"Value is not an instance of ValidationChecker."
		);

		next().pending();
	});

	this.When("I validate the value", function (next) {
		failedValidations = validationChecker.check(validationValue);
		next().pending();
	});

	this.Then("it will $save saving", function (save, next) {
		save = convertAllowDenyToBool(save);
		assert.equal(save, failedValidations.length === 0,
			`The validation check returned '${failedValidations.length === 0}' when it should return '${save}'.`
		);

		next().pending();
	});

	this.Then("$cancel cancelling", function (cancel, next) {
		cancel = convertAllowDenyToBool(cancel);
		assert.equal(cancel, true,
			'Cancel functionality is configured in State Checker based on the dirty state and should always be true if modifying the field and re-checking validation.'
		);

		next().pending();
	});
};

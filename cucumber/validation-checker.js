class ValidationChecker {
	constructor(options = {}) {
		this.options = Object.assign({
			validations: []
		}, options);

		var validators = {
			required: value => !!value,
			number: /^[-\.\d]+$/,
			currency: /^-?\$[-\d]+\.?\d*$/,
			alphabetic: /^\D+$/,
			alphaNumeric: /^[\w\d]+$/,
		}

		this.validations = this.options.validations.map(validation => {
			return validation && validators[validation];
		});
	}

	hasNoValue(value) {
		switch(value) {
			case undefined:
			case false:
			case null:
			case '':
				return true;
			default:
				return false;
			}
	}

	check(value) {
		var failedValidations = [];

		this.validations.forEach(validation => {
			if (!validation) {
				return;
			} else if (this.hasNoValue(value)) {
				failedValidations.push('noValue');
			} else if (typeof validation === 'function') {
				if (!validation(value)) {
					failedValidations.push('custom');
				}
			} else if (!validation.test(value)) {
				failedValidations.push('custom');
			}
		});

		return failedValidations;
	}
}

module.exports = ValidationChecker;

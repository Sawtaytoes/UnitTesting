class Mathy {
	constructor(options = {}) {
		this.options = Object.assign({
			value: 2
		}, options);

		this.value = this.options.value;
	}

	get() {
		return this.value;
	}

	set(num = 0) {
		return this.value = num;
	}

	add(num = 0) {
		return this.value + num;
	}

	sub(num = 0) {
		return this.value - num;
	}
}

module.exports = Mathy

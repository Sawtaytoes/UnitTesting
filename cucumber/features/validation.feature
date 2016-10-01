Feature: Input Field Validtion
	I want to be able to define validation states
	That can be a string, RegEx, or function
	Which returns an array of failures
	While the given value is not valid

	Scenario Outline: Validate <validation> value for `<value>`
		Given a value set to <value>
		And I setup a validation check for <validation>
		When I validate the value
		Then it will <canSave> saving
		And <canCancel> cancelling

		Examples:
			| validation   | value     | canSave | canCancel |
			|              | 123       | allow   | allow     |
			|              | -1        | allow   | allow     |
			|              | "123"     | allow   | allow     |
			|              | $123      | allow   | allow     |
			|              | $12.30    | allow   | allow     |
			|              | test      | allow   | allow     |
			|              | "test"    | allow   | allow     |
			|              |           | allow   | allow     |
			|              | false     | allow   | allow     |
			|              | null      | allow   | allow     |
			|              | undefined | allow   | allow     |
			| required     | 123       | allow   | allow     |
			| required     | -1        | allow   | allow     |
			| required     | "123"     | allow   | allow     |
			| required     | $123      | allow   | allow     |
			| required     | $12.30    | allow   | allow     |
			| required     | test      | allow   | allow     |
			| required     | "test"    | allow   | allow     |
			| required     |           | deny    | allow     |
			| required     | false     | deny    | allow     |
			| required     | null      | deny    | allow     |
			| required     | undefined | deny    | allow     |
			| number       | 123       | allow   | allow     |
			| number       | -1        | allow   | allow     |
			| number       | "123"     | allow   | allow     |
			| number       | $123      | deny    | allow     |
			| number       | $12.30    | deny    | allow     |
			| number       | test      | deny    | allow     |
			| number       | "test"    | deny    | allow     |
			| number       |           | deny    | allow     |
			| number       | false     | deny    | allow     |
			| number       | null      | deny    | allow     |
			| number       | undefined | deny    | allow     |
			| currency     | 123       | deny    | allow     |
			| currency     | -1        | deny    | allow     |
			| currency     | "123"     | deny    | allow     |
			| currency     | -$123     | allow   | allow     |
			| currency     | $-123     | allow   | allow     |
			| currency     | $123      | allow   | allow     |
			| currency     | $12.30    | allow   | allow     |
			| currency     | test      | deny    | allow     |
			| currency     | "test"    | deny    | allow     |
			| currency     |           | deny    | allow     |
			| currency     | false     | deny    | allow     |
			| currency     | null      | deny    | allow     |
			| currency     | undefined | deny    | allow     |
			| alphabetic   | 123       | deny    | allow     |
			| alphabetic   | -1        | deny    | allow     |
			| alphabetic   | "123"     | deny    | allow     |
			| alphabetic   | $123      | deny    | allow     |
			| alphabetic   | $12.30    | deny    | allow     |
			| alphabetic   | test      | allow   | allow     |
			| alphabetic   | "test"    | allow   | allow     |
			| alphabetic   |           | deny    | allow     |
			| alphabetic   | false     | deny    | allow     |
			| alphabetic   | null      | deny    | allow     |
			| alphabetic   | undefined | deny    | allow     |
			| alphaNumeric | 123       | allow   | allow     |
			| alphaNumeric | -1        | deny    | allow     |
			| alphaNumeric | "123"     | allow   | allow     |
			| alphaNumeric | $123      | deny    | allow     |
			| alphaNumeric | $12.30    | deny    | allow     |
			| alphaNumeric | test      | allow   | allow     |
			| alphaNumeric | "test"    | deny    | allow     |
			| alphaNumeric |           | deny    | allow     |
			| alphaNumeric | false     | deny    | allow     |
			| alphaNumeric | null      | deny    | allow     |
			| alphaNumeric | undefined | deny    | allow     |

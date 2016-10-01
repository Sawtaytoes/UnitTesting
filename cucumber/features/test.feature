Feature: Unit Test Features
	As a programmer
	So I can write bug-free code
	And really slick APIs

	Scenario: Redefine
		Given a number 1
		When set to 1
		Then it will be 1

	Scenario: Add
		Given a number 1
		When added to 1
		Then it will be 2

	Scenario: Add Negative
		Given a number -1
		When added to -1
		Then it will be -2

	Scenario: Add Positive w/ Negative
		Given a number 1
		When added to -1
		Then it will be 0

	Scenario: Subtract
		Given a number 1
		When subtracted from 1
		Then it will be 0

	Scenario: Subtract Negative
		Given a number 1
		When subtracted from 2
		Then it will be -1

	Scenario: Complex
		Given a number 1
		When set to 2
			And added to 2
			And subtracted from 1
		Then it will be 3

	Scenario: Large Number
		Given a number 999999999999999999999999
		When set to 999999999999999999999999
		Then it will be 999999999999999999999999

	Scenario: Large Number Addition
		Given a number 999999999999999999999999
		When added to 999999999999999999999999
		Then it will be 1999999999999999999999998

	Scenario: Large Number Subtraction
		Given a number 999999999999999999999999
		When subtracted from 99999999999999999999
		Then it will be 999900000000000000000000

	Scenario: Large Number Subtraction to Zero
		Given a number 999999999999999999999999
		When subtracted from 999999999999999999999999
		Then it will be 0

	Scenario: Large Number Shorthand
		Given a number 9.999e+23
		When set to 9.999e+23
		Then it will be 9.999e+23

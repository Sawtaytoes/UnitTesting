Feature: Unit Test Simple Math
	As a programmer
	I want to create a class to do simple math
	To test this unit testing framework

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
		When subtracted by 1
		Then it will be 0

	Scenario: Subtract Negative
		Given a number 1
		When subtracted by 2
		Then it will be -1

	Scenario: Complex Add and Subtract
		Given a number 1
		When set to 2
			And added to 2
			And subtracted by 1
		Then it will be 3

	Scenario: Multiply
		Given a number 9
		When multiplied with 27
		Then it will be 243

	Scenario: Multiply with Zero
		Given a number 1
		When multiplied with 0
		Then it will be 0

	Scenario: Multiply with One
		Given a number 1
		When multiplied with 1
		Then it will be 1

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
		When subtracted by 99999999999999999999
		Then it will be 999900000000000000000000

	Scenario: Large Number Subtraction to Zero
		Given a number 999999999999999999999999
		When subtracted by 999999999999999999999999
		Then it will be 0

	Scenario: Large Number Shorthand
		Given a number 9.999e+23
		When set to 9.999e+23
		Then it will be 9.999e+23

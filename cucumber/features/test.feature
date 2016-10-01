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

	Scenario: Subtract
		Given a number 1
		When subtracted from 1
		Then it will be 0

	Scenario: Negative
		Given a number 1
		When subtracted from 2
		Then it will be -1

	Scenario: Complex
		Given a number 1
		When set to 2
			And added to 2
			And subtracted from 1
		Then it will be 3

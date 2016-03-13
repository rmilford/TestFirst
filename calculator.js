var createCalculator = function () {
	var calculator = {};
	calculator.CalculatorValue = 0;

	calculator.value = function () {
		return this.CalculatorValue;
	};

	calculator.add = function (num) {
		this.CalculatorValue += num;
	};
	
	calculator.subtract = function (num) {
		this.CalculatorValue -= num;
	};

	return calculator;
};
var createCalculator = function () {
	var calculator = {};
	// syntax improvement: follow the convention of "camelCase"
	// ex: calculator.calculatorValue = 0;
	calculator.calculatorValue = 0;

	calculator.value = function () {
		return this.calculatorValue;
	};

	calculator.add = function (num) {
		this.calculatorValue += num;
	};
	
	calculator.subtract = function (num) {
		this.calculatorValue -= num;
	};

	return calculator;
};

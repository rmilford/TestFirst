var RPNCalculator = function () {

	this.stack = [];

	this.push = function (num) {
		this.stack.push(num);
	};

	this.pop = function () {
		return this.stack.pop();

	};
	
	RPNCalculator.prototype.plus = function () {
		if(this.stack.length < 2) {
			throw "rpnCalculator is empty";
		};
		var num1 = this.pop(); 
		var num2 = this.pop();
		var newNum =  num1 + num2;
		this.push(newNum);
	};

	RPNCalculator.prototype.value = function () {

		return this.stack[this.stack.length -1];
	};

	RPNCalculator.prototype.minus = function () {
		if(this.stack.length < 2) {
			throw "rpnCalculator is empty";
		};
		var num1 = this.pop(); 
		var num2 = this.pop();
		var newNum =  num2 - num1;
		this.push(newNum);
	};

	RPNCalculator.prototype.divide = function () {
		if (this.stack.length < 2) {
			throw"rpnCalculator is empty";
		};
		var num1 = this.pop(); 
		var num2 = this.pop();
		var newNum =  num2 / num1;
		this.push(newNum);
	};

	RPNCalculator.prototype.times = function () {
		if(this.stack.length < 2) {
			throw "rpnCalculator is empty";
		};
		var num1 = this.pop(); 
		var num2 = this.pop();
		var newNum =  num2 * num1;
		this.push(newNum);
	};
};




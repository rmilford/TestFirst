var Mammal = function(str) {
	this.name = str;
	this.offspring = [];

};

	Mammal.prototype.sayHello = function(){
		return "My name is " + this.name + ", I'm a Mammal";
	}

	Mammal.prototype.haveBaby = function(){
		var obj = new Mammal("Baby " + this.name);
		this.offspring.push(obj);
		return obj;
	}


var Cat = function(name, color){
	Mammal.call(this, name)
	this.color = color;


	Cat.prototype.haveBaby = function(color){
		var obj = new Cat("Baby " + this.name, color);
		this.offspring.push(obj);
		return obj;
	}
};

Cat.prototype = Object.create(Mammal.prototype);
Cat.prototype.constructor = Cat;





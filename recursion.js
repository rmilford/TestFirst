var factorialIterative = function(num){
	var product = 1;
	for(var i = num; i > 1; i--) {
       product = product * i;
    }    
    return product;
};

var factorial = function(num){
	if(num === 0) {
	   return 1;
	}
	return num * factorial(num -1);
};

var fib = function(num){
	if(num <= 1) {
		return 1;
	}
	return fib(num -1) + fib(num -2);
};

var type = function (obj) {
	// this can be condensed to:
	return Object.prototype.toString.call(obj).slice(8,-1)
     //var str = Object.prototype.toString.call(obj);
     //str = str.slice(8,-1);
     //return str;
};




var stringify = function(obj){

	// for undefined, number, boolean, null, function, each if can be condensed to one statement,
	// if the value is not a String, Object, or Array, stringify the value (which is what you do in each
	// statement for undefined, number, boolean, etc:
	// if(type(obj)==="Undefined"){
	// 	return "" + obj;
	// }

	// if (type(obj)==="Number") {
	// 	return "" + obj;
	// }

	if (type(obj)==="String"){
		return '"'+ obj.valueOf() +'"';

	}
	// if(type(obj)==="Boolean"){
	// 	return "" + obj;
	// }
	// if(type(obj)==="Null"){
	// 	return "" + obj;
	// }
	// if(type(obj)==="Function"){
	// 	return "" + obj;
	// }
	if(type(obj)==="Array"){
		// great use of map!
		var outPutStr = obj.map(stringify).join(',');

	
		return "[" + outPutStr + "]";
	}
	
	if(type(obj)==="Object"){
	
		var str = "";
		for (var prop in obj) {
			str += '"' + prop + '"' + ": " + stringify(obj[prop]) + ",";
		}

	str = str.slice(0, -1);	
    return "{" + str + "}";
	}
	
	return "" + obj;
};

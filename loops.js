var repeat = function (str, num) {
	var outStr = "";
	for (var i = 0; i < num; i++) {
		outStr += str;
	};
	return outStr;
};

var sum = function (arr) {
	var num = 0;
	for (var i = 0; i < arr.length; i++){
		num += arr[i];
	};

	return num;
};

var gridGenerator = function (num) {
	var newStr = "";
	for(var i = 0; i < num; i++){
		for(var j = 0; j < num; j++){
			if((i + j)%2 === 0) 
				newStr += "#";
			else{ 
				newStr += " ";
			}
		}
		newStr += "\n";
	} 
return newStr;    	
};

var join = function (arr, slash) {
	var emptyStr = "";
	if(slash === undefined){
		slash = "";
	}
	for(var i = 0; i < arr.length; i++){
		if(i ===0){
			emptyStr += arr[i];
		}
		else{
			emptyStr = emptyStr + slash + arr[i];
		}
	}

return emptyStr;
};


var paramify = function (myObj) {
    
    var str = "";
    var arr = Object.keys(myObj).sort();
    
    for(var i = 0; i < arr.length; i++){	
            
       if(str !== ""){
           str += "&";
       } 
   
       str += arr[i] + "=" + myObj[arr[i]];
    }

    return str;
};













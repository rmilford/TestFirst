var findACount = function(str){
	var regexp = /a/gi;
	var matches_array = str.match(regexp);
	if(matches_array === null){
		return 0;
	}
	else{
		return matches_array.length;
	}
};

var areaCodeFinder = function(str){
	var num = /\d{3}/;
	var result = num.exec(str);
	result = result[0];
	return parseInt(result);
};

var adjustUrlParameter = function(url, param){
	var regExUrl = /http.*com/
	var regExId = /ID=([\d]{3})/;
	var regExType = /TYPE=([\d]{3})/;

	var urlString = url.match(regExUrl);
	var idString = "";
	var typeString = "";
	
	if (regExId.test(url)) {
		idString = url.match(regExId);		
	}
	if (regExId.test(param)) {
		idString = param.match(regExId);		
	}
	if (regExType.test(url)) {
		typeString = url.match(regExType);		
	}
	if (regExType.test(param)) {
		typeString = param.match(regExType);		
	}

	var outputStr = urlString;
	if ((idString!=="")) {
		outputStr += "?ID="+idString[1];
	}
	if ((typeString!=="")) {
		outputStr += "&TYPE="+typeString[1];
	}
	return outputStr;
};
var stringPlusPlus = function(str){
	if(/[^0-9]$/.test(str)){
		return str + 1;
	}
	else if(/^\d+$/.test(str)){
		var string = (parseInt(str) +1);
		return string.toString();
	}
	else if (/[\d]$/.test(str)) {
		var txtStr = str.match(/^([\D]+)/);
		txtStr = txtStr[0];
		var digitStr = str.match(/[\d]+$/);
		digitStr = digitStr[0];
		var digitOutStr = "" + (parseInt(digitStr)+1);
		while (digitOutStr.length < digitStr.length) {digitOutStr = "0" + digitOutStr;}
		return txtStr+digitOutStr;
	}
};





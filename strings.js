
var txtStr = document.getElementById("txtStr");
var btnChange = document.getElementById("btnChange");
var result = document.getElementById("result");
var txtStrValue = txtStr.value.toUpperCase();

btnChange.addEventListener("click", function() { 
result.innerHTML = txtChanger(txtStrValue); });
txtStr.addEventListener("onkeydown", keyUpHandler);

function reversal(_str) {
	var tmpStr = "";

	for (i=_str.length - 1;i > -1; i--) {
		tmpStr += _str.charAt(i);

	}
	return tmpStr;
}

function alphabits(_str) {
	_str = _str.split('');
	_str = _str.sort();
	_str = _str.toString();
	return _str.replace(/,/g, "");
}

function palindrome(_str, _revStr) {
	// _str = _str.toUppercase();
	// _revStr = _revStr.toUpper
	palBool = (_str.toUpperCase() === _revStr.toUpperCase());
	
	return palBool;
}

function txtChanger(testString) {
	 
	var revStr = reversal(testString);
	var alphaOrderStr = alphabits(testString);
	var palBool = palindrome(testString, revStr);
	var finalHTML = "";

	finalHTML = "Your String: '" + testString + "'.<br>";
	finalHTML += "In Reverse: <b>" + revStr + "</b>.<br>";
	finalHTML += "In Alphabetical Order: <b>" + alphaOrderStr + "</b>.<br>";
	
	if (palBool) {
		finalHTML += "<b>IS</b> a palindrome!";
	} else {
		finalHTML += "<b>IS NOT</b> a palindrome!";
	}

	return finalHTML;

}

function keyUpHandler (e) {
	console.log("e:", e);
	result.innerHTML = "e:" + e;

}
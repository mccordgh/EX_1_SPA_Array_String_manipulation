
var txtStr = document.getElementById("txtStr");
var btnChange = document.getElementById("btnChange");
var result = document.getElementById("result");

btnChange.addEventListener("click", function() { 
result.innerHTML = txtChanger(txtStr.Value); });
txtStr.addEventListener("keyup", keyUpHandler);
txtStr.addEventListener("keydown", keyDownHandler);


function reversal(_str) {
	return _str.split("").reverse().join().replace(/,/g, '');
}

function alphabits(_str) {

	_str = _str.split('');
	_str = _str.sort();
	_str = _str.toString();
	return _str.replace(/,/g, "");
}

function palindrome(_str, _revStr) {
	palBool = (_str.toUpperCase() === _revStr.toUpperCase());
	
	return palBool;
}

function txtChanger () {

	var testString = txtStr.value;
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
	var code = e.keyCode;
	if (code == 13) { 
		e.preventDefault()
		result.innerHTML = txtChanger(txtStr.Value);
 	}
 }

function keyDownHandler (e) {
	var code = e.keyCode;
	if (code == 13) { 
		e.preventDefault()
 	}
 }
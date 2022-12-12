//Exercise One

function sum (numOne, numTwo) {
	let result = numOne + numTwo;
	return result;
	// return numOne + numTwo;
}

function subtract (numOne, numTwo) {
	let result = numOne - numTwo;
	return result;
}

function multiply (numOne, numTwo) {
	let result = numOne * numTwo;
	return result;
}

function divide (numOne, numTwo) {
	let result = numOne / numTwo;
	return result;
}

let sumResult = sum (10, 10);
console.log(sumResult);

let subResult = subtract (20, 15);
console.log(subResult);

let mulResult = multiply (5, 5);
console.log(mulResult);

let divResult = divide (20, 5);
console.log(divResult);

//Exercise Two

function celToFah (celsius) {
	let result = celsius * 1.8 + 32;
	return result;
}

let fah = celToFah (30);
console.log(fah);

function fahToCel (fahrenheit) {
	let result = (5/9) * (fahrenheit-32);
	return result;
}

let cel = fahToCel (86);
console.log(cel);

//Exercise Three

let currentYear = new Date().getFullYear() 
function age (birthYear) {
	let result = currentYear - birthYear;
	let resultString = `You are ${result} years old`
	return resultString;
}

console.log(age (1999));
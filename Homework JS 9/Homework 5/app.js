let exampleOne = ["one", null, undefined, NaN, false, "", "two", "three", "four", "one"];

function faultyValues (array) {
	let sum = [];
for (let num of array){
	if (!num) continue;
sum.push (num);
}
return console.log (`${sum}`);
}
	
let firs = faultyValues (exampleOne);
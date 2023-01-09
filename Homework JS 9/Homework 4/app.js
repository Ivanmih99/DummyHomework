let arrayOne = [6,7,10,8,10];

function average (array) {
	let sum = 0;
	for (let num of array){
		sum = sum + num;
	}
	console.log (`${sum/5}`);
	

}

let exampleOne = average(arrayOne);
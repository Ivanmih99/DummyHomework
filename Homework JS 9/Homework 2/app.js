function findBigger (numberOne, numberTwo) {
	let x = Math.abs(numberOne-100);
	let y = Math.abs(numberTwo-100);
	if (numberOne<0 || numberTwo<0){
		return console.log (`Negative number is inserted`);
	}

	else if (x<=y){
		return console.log (`${numberOne} is closer to 100`)
	}
	else if (y<=x){
		return console.log (`${numberTwo} is closer to 100`);
	};
	
}

let exampleOne = findBigger(2,3);
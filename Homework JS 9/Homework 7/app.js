function numbers () {
	let array = [];
		for (let i = 1; i<=500; i++){
			if (i%5 === 0 || i%10 === 0){
array.push (i);}
	}
	return console.log (array);
}

let exampleOne = numbers();
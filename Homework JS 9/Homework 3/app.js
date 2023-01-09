let bobExpensive = {
	salary: 1000,
	rent: 375,
	bills: 250,
}

function bobCalc () {
	let moneyLeft = bobExpensive.salary - (bobExpensive.rent+bobExpensive.bills);
console.log (`${moneyLeft} is what Bob has left`);
console.log (`Bob's expenses are ${bobExpensive.rent+bobExpensive.bills}`);
}

bobCalc ();
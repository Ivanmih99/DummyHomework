//Homework part 1

function typeOf (input) {
	console.log(typeof input);
}

typeOf (null);
typeOf (true);
typeOf (1);
typeOf ("a");
typeOf ();

//Homework part 2

function humanToDog (age) {
	dogAge = age * 7;
	return dogAge;
}

let humanYears = 8;
console.log(`${humanYears} human years are equal to ${humanToDog (humanYears)} dog years`);

function dogToHuman (age) {
	humanAge = age / 7;
	return humanAge;
}

let dogYears = 56;
console.log(`${dogYears} dog years are equal to ${dogToHuman (dogYears)} human years`);

//Homework part 3

let balance = 5000;
function atm (value) {
	if (value <= balance) {
		console.log(`Withdrawn: ${value}`);
		console.log(`Balance left: ${balance-value}`);
	}
	else if (value > balance) {
		console.log(`You don't have enough money on your account`);
	}
	else {
		console.log(`Not valid input`);
	}
}

atm (prompt("Enter the amount you want to withdrawn"));

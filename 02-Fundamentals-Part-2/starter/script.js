function logger() {
	console.log("My name is Birdy");
}

logger();
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
	console.log(apples, oranges);
	const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
	return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

function calcAge1(birthYear) {
	const age = 2037 - birthYear;
	return age;
}

const age1 = calcAge1(1991);

const calcAge2 = function (birthYear) {
	return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age1, age2);

const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
	const age = 2037 - birthYear;
	const retirement = 65 - age;
	return `${firstName} retires in ${retirement} years`;
};

const year = yearsUntilRetirement(1991, "Birdy");
console.log(year);

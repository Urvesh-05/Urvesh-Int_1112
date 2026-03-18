let number = 10;

let type;
if (number > 0) {
    type = "positive";
} else if (number < 0) {
    type = "negative";
} else {
    type = "zero";
}

let check = (number % 2 === 0) ? "even" : "odd";

console.log(`The number ${number} is ${type} and ${check}.`);
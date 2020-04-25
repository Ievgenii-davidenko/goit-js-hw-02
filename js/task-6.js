'use strict';

let input;
const numbers = [];
let total = 0;

while (input !== null) {
  input = prompt('Enter number');
  numbers.push(Number(input));
  console.log(numbers);
}

for (const number of numbers) {
  total += number;
}
console.log(`Total sum is ${total}`);


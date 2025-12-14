// Get Digits: Create a function that given a string, returns the integer made from the strings digits.

let string = prompt("Enter 1 string, with 2 words, 3 letters long");

console.log(string.replace(/\D/g, ""));
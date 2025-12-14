// Acronyms: Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized)

let string = prompt("enter non capitalized string");

let capitalString = string.charAt(0).toUpperCase() + string.slice(1);

console.log(capitalString);
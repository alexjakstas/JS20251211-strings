
// Count Non-Spaces: Create a function that, given a string, returns the number of non-space characters found in the string.

let myString = prompt("input text with spaces");


let remText = myString.replace(/ /g, "");


let length = remText.length;

console.log(length);
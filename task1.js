// Remove Blanks: Create a function that, given a string, returns all of that string’s contents, but without blanks.

"use strict";

let string = prompt("Enter The String");

console.log(string.replace(/\s/g,""))
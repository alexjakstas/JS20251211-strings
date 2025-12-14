
const words = ["apple", "bat", "banana", "cat", "elephant", "dog"];
const minimum = 4;

function filterLongStrings(arr, minLength) {

  return arr.filter(str => {

    return str.length >= minLength;
  });
}

const longWords = filterLongStrings(words, minimum);

console.log(longWords); 
console.log(words);
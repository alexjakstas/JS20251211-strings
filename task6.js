

function checkIfString(variable) {
    if (Object.prototype.toString.call(variable) === '[object String]') {
        console.log("variable is a string.");
    } else {
        console.log("variable is not a string.");
    }
}
checkIfString("Hello, World!");  
checkIfString(42);
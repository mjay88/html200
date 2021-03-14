// Create an array, with at least 5 strings

let array = ['red', 'yellow', 'orange', 'green', 'blue'];
// Add an element to the end of the array

//using the .push method
array.push('purple');
console.log(array);

//using bracket notation
array[array.length] = 'cyan';
console.log(array);

//using the spread operator
array = [...array, 'turqouese'];
console.log(array);

// Remove the third element
let thirdElement = array.splice(2, 1);
console.log(array);
console.log(thirdElement);

// Create a string from the elements and comma separate them
let string = array.join(',');
console.log(string);
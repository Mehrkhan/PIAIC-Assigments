// Tests for equality and inequality with strings
console.log('mango' === 'mango'); // true
// @ts-expect-error
console.log('mango' !== 'orange'); // true
// @ts-expect-error
console.log('mango' === 'orange'); // false
console.log('mango' !== 'mango'); // false
// Tests using the lower case function
console.log('Mango'.toLowerCase() === 'mango'); // true
console.log('Mango'.toLowerCase() !== 'orange'); // true
console.log('Mango'.toLowerCase() === 'orange'); // false
console.log('Mango'.toLowerCase() !== 'mango'); // false
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(5 === 5); // true
// @ts-expect-error
console.log(5 !== 4); // true
console.log(5 > 4); // true
console.log(5 < 6); // true
console.log(5 >= 5); // true
console.log(5 <= 6); // true
// @ts-expect-error
console.log(5 === 4); // false
console.log(5 !== 5); // false
console.log(5 > 6); // false
console.log(5 < 4); // false
console.log(5 >= 6); // false
console.log(5 <= 4); // false
// Tests using "and" and "or" operators
console.log(5 > 4 && 6 > 5); // true
console.log(5 > 4 || 6 < 5); // true
console.log(5 > 6 && 6 > 5); // false
console.log(5 > 6 || 6 < 5); // false
// Test whether an item is in a array
var fruits = ['Mango', 'orange', 'banana'];
console.log(fruits.indexOf('Mango')); // true
// Test whether an item is not in a array
console.log(!fruits.indexOf('pear')); // true
// Test whether an item is in an array
var fruits1 = ['Mango', 'orange', 'banana'];
console.log(fruits.indexOf('Mango') !== -1); // true
// Test whether an item is not in an array
console.log(fruits1.indexOf('pear') === -1); // true

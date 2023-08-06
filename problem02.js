var boy = "Ahmed";
console.log("Lower Case", boy.toLowerCase());
console.log("Upper Case", boy.toUpperCase());
var firstChar = boy.slice(0, 1);
var firstCharUpperCase = firstChar.toUpperCase();
var restOfName = boy.slice(1, boy.length);
var titleCaseName = firstCharUpperCase + restOfName.toLowerCase();
console.log("Title Case:", titleCaseName);

let boy="Ahmed"
console.log("Lower Case",boy.toLowerCase());
console.log("Upper Case",boy.toUpperCase());
let firstChar=boy.slice(0,1);
let firstCharUpperCase=firstChar.toUpperCase();
let restOfName=boy.slice(1,boy.length);
let titleCaseName=firstCharUpperCase+restOfName.toLowerCase();
console.log("Title Case:",titleCaseName);

let visiting=["Turky","Brazil","Thailand","Tokyo","Malasiya","UAE"];

console.log("The original order of the arry");
console.log(visiting);

console.log("Alphabatical order");
console.log(visiting.sort());

console.log("Still original order");
console.log(visiting);

console.log("\n Reverse order");
console.log(visiting.sort((a,b)=> b.localeCompare(a)));

console.log("\n Original order");
console.log(visiting);

console.log("\nReverse order of the list");
visiting.reverse();
console.log(visiting);

console.log("\n Reversing order again");
visiting.reverse();
console.log(visiting);

console.log("\n Sorting alphabatical");
visiting.sort();
console.log(visiting);

console.log("\n Reverse alphabatical order")
console.log(visiting.sort((a,b)=>b.localeCompare(a)));
console.log(visiting);

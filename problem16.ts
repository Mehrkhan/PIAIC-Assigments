var guests2 = [ 'musa','ali','adil','shabbir','nizam','usman']
console.log("I invite two people today for dinner");

guests2.pop();
console.log(`Sorry ${guests2} I cant invite you for dinner`)

console.log(`I am still inviting ${guests2[0]} and ${guests2[3]} for dinner`);

guests2.pop();
guests2.pop();

console.log("Now I have empty list");

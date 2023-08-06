let invite=['ali','ahmed','shabir','adil','noman'];
console.log("I am inviting guests"+ invite. length+" for dinner");

//guest who can not to come.
let guestWhoCant="ali";
let newGst="hassan";
console.log("He,"  +guestWhoCant+  "cant join us");
console.log("New guest"  +newGst+  "invite")

//new guest
let gust=['rehman','ehsan','fasi'];
invite.unshift(gust[0]);
invite.splice(2,0, gust[1]);
invite.push(gust[2]);
console.log(" I found bigg dinner table. So inviting" +gust.length+ "for dinner");

//shrinking
console.log("I invite only two people");
invite.pop();
console.log(`Sorry ${invite} i cant invite you to dinner`);
console.log(`I am still inviting ${invite[0]} and ${invite[2]} for dinner`);

//check length
console.log("Inviting " +invite.length+ "people");

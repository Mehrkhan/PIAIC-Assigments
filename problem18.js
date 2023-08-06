var invite = ['ali', 'ahmed', 'shabir', 'adil', 'noman'];
console.log("I am inviting guests" + invite.length + " for dinner");
//guest who can not to come.
var guestWhoCant = "ali";
var newGst = "hassan";
console.log("He," + guestWhoCant + "cant join us");
console.log("New guest" + newGst + "invite");
//new guest
var gust = ['rehman', 'ehsan', 'fasi'];
invite.unshift(gust[0]);
invite.splice(2, 0, gust[1]);
invite.push(gust[2]);
console.log(" I found bigg dinner table. So inviting" + gust.length + "for dinner");
//shrinking
console.log("I invite only two people");
invite.pop();
console.log("Sorry ".concat(invite, " i cant invite you to dinner"));
console.log("I am still inviting ".concat(invite[0], " and ").concat(invite[2], " for dinner"));
//check length
console.log("Inviting " + invite.length + "people");

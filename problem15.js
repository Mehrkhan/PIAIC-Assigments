var guests = ["Ali", "Ahmed", "Umeer"];
console.log("I have found bigg dinner table");
guests.unshift("musa");
guests.splice(2, 0, "usman");
guests.push("adil");
var neGuest = "Khan";
console.log("Hi guys ".concat(guests, " Ali not join today party so we invite ").concat(neGuest, " instead"));
console.log("Brothers ".concat(guests, " I want to join me today its not just dinner party also gathering with you. See you tonight."));

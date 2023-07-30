function calculategrades() {
    var promptsync = require("prompt-sync")();
    var marks = promptsync("Enter Your Marks:");
    if (marks >= 90 && marks <= 100) {
        return "Grade A";
    }
    else if (marks >= 80 && marks < 90) {
        return "Grade B";
    }
    else if (marks >= 50 && marks < 60) {
        return "Grade F";
    }
    else {
        return "Invalid";
    }
}
var grade = calculategrades();
console.log("Your grade is:".concat(grade));

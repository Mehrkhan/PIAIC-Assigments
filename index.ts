// Assigment 01,,,Alternate method of compiling file

// Alternate method to transpile ts file to js ... command for that is,, tsc index.ts -w... 
//it means to open watch mode.. then we no need to type the same command again and again.

//Assigment 02,,,Functions
function calculategrades(){
const promptsync=require("prompt-sync")();

const marks=promptsync("Enter Your Marks:");

    if(marks>=90 && marks<=100){
        return"Grade A";
    }
    else if(marks>=80 && marks<90){
        return"Grade B";
    }
    else if(marks>=60 && marks<80){
        return"Grade C";
    }
    else if(marks>=50 && marks<60){
        return"Grade F";
    }
    else{
        return"Invalid";
    }
}
let grade=calculategrades();
console.log(`Your grade is:${grade}`);
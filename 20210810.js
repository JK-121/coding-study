// const age = prompt("How old are you?");

// console.log(typeof age, typeof "15", typeof parseInt("15"), parseInt(age), typeof parseInt(age));

const age = parseInt(prompt("How old are you?"));

console.log(age);

console.log();

// if(isNaN(age)) {
// // condition === true
// console.log("Please write a number.");
// } else {
//     // condition === false
//     console.log("Thank you.");
// };

if(isNaN(age) || age < 0) {
    // condition === true
    console.log("Please write a correct number.");
    } else if(age<18) {
    console.log("You are too young.");
    } else if(age >= 18 && age <= 50){
    console.log("You can drink.");
    } 
    else {
    console.log("You should not drink.");
    };
    
const amIFat = null;
let something;
console.log(amIFat);
console.log(something);

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

//get item from array
console.log(daysOfWeek);

//add one more day to the array
daysOfWeek.push("sun");

console.log(daysOfWeek);

const player = {
    name : "jk",
    points : 10,
    mvp : true,
};

console.log(player);
console.log(player.name);
console.log(player["name"]);

player.points = 12;
console.log(player);

player.age = 32;
player.points += 5; //player.points = player.points + 5;
console.log(player);
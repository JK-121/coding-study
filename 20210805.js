function sayHello(name, age) {
 console.log("Hello my name is " + name + " and I'm " + age);
};

sayHello("jk", 10);
sayHello("ab", 20);
sayHello("cd", 30);

function plus(a, b) {
 console.log(a + b);
};

plus(10, 30);

const player = {
    name : "jk",
    sayHello : function(otherPersonsName) {
    console.log("Hello " + otherPersonsName);
    },
};

player.sayHello("ab");
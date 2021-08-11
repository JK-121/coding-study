document.title = "JS 6일차!";

const title = document.getElementById("title");
console.log(title);

title.innerText = "Got you!";

const hellos = document.getElementsByClassName("hello");
console.log(hellos);

const title1 = document.getElementsByTagName("h1");
console.log(title1);

const title2 = document.querySelector(".hi h1");
console.log(title2);

const title3 = document.querySelectorAll(".hi h1");
console.log(title3);

title.style.color = "blue";

function handleTitleClick() {
    title.style.backgroundColor = "red";
 console.log("title was clicked!");
};

title.addEventListener("click", handleTitleClick);
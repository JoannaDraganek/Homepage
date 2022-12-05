
console.log("Hello! Enjoy reading :)");

let buttonGreetings = document.querySelector(".buttonGreetings");
let farewell = document.querySelector(".farewell");

buttonGreetings.addEventListener("click", () => {
    farewell.innerHTML = "I cordially greet you";
});

buttonGreetings.addEventListener("dblclick", () => {
    farewell.innerHTML = "Thank you for your attention :)";
});


{
    const welcome = () => {
        console.log("Hello Developers! Enjoy reading!");
    };

    const toggleBackground = (changeBackgroundButton) => {
        const body = document.querySelector(".js-body");
        body.classList.toggle("body--dark");
        changeBackgroundButton.innerText = body.classList.contains("body--dark") ? "dark grey" : "bright grey";
    };

    const onButtonChangeTextFarwellClick = (farewell) => {
        farewell.innerHTML = "I cordially greet you";
    };

    const onButtonChangeTextFarwellDblclick = (farewell) => {
        farewell.innerHTML = "Thank you for your attention :)";
    };

    const init = () => {
        let changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
        let changeTextFarwellButton = document.querySelector(".js-ChangeTextFarwellButton");
        let farewell = document.querySelector(".farewell");
        changeBackgroundButton.addEventListener("click", () => {
            toggleBackground(changeBackgroundButton)
        });
        changeTextFarwellButton.addEventListener("click", () => {
            onButtonChangeTextFarwellClick(farewell)
        });
        changeTextFarwellButton.addEventListener("dblclick", () => {
            onButtonChangeTextFarwellDblclick(farewell)
        });
        welcome();
    }

    init();
};

{
    const welcome = () => {
        console.log("Hello Developers! Enjoy reading!");
    };
   
    const toggleBackground = () => {
        const body = document.documentElement;
        const nextColorName = document.querySelector(".js-nextColorName");
        body.classList.toggle("body--dark");
        nextColorName.innerText = body.classList.contains("body--dark") ? "bright" : "dark";
    };
        

    const onButtonChangeTextFarwellClick = () => {
        farewell.innerHTML = "I cordially greet you";
    };

    const onButtonChangeTextFarwellDblclick = () => {
        farewell.innerHTML = "Thank you for your attention :)";
    };

    let farewell = document.querySelector(".farewell");
    
    const init = () => {    
        let ChangeBackgroundButton = document.querySelector(".js-changeBackgroundButton"); 
        let ChangeTextFarwellButton = document.querySelector(".js-ChangeTextFarwellButton");
        ChangeBackgroundButton.addEventListener("click", toggleBackground);
        ChangeTextFarwellButton.addEventListener("click", onButtonChangeTextFarwellClick);
        ChangeTextFarwellButton.addEventListener("dblclick", onButtonChangeTextFarwellDblclick);
        welcome();
    }

    init ();
};

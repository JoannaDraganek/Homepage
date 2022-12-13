{
    const welcome = () => {
        console.log("Hello Developers! Enjoy reading!");
    };
   
    const toggleBackground = (ChangeBackgroundButton) => {
        const body = document.querySelector(".js-body");
        body.classList.toggle("body--dark");
        ChangeBackgroundButton.innerText = body.classList.contains("body--dark") ? "dark grey" : "bright grey";
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
        ChangeBackgroundButton.addEventListener("click",() => {
            toggleBackground(ChangeBackgroundButton)}); 
        ChangeTextFarwellButton.addEventListener("click", onButtonChangeTextFarwellClick);
        ChangeTextFarwellButton.addEventListener("dblclick", onButtonChangeTextFarwellDblclick);
        welcome();
    }

    init ();
};

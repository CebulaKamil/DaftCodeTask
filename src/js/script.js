const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const circleSquare = document.getElementById("circle-square");
const containerBody = document.getElementById("container-body");
const textRow = document.getElementById("text-row");
const circleSquareRow = document.getElementById("circleSquareRow");
const socialMediaText = document.getElementById("social-media-text");
let open = false;
let rotated = false;


const displayMenu = function() {
    if (open == false) {
    hamburger.style.backgroundImage = "url('../img/iks.svg')";
    nav.classList.remove("d-none");
    nav.classList.remove("d-md-block");
    containerBody.style.backgroundColor = "#001820";
    textRow.style.display = "none";
    circleSquareRow.style.display = "none";
    socialMediaText.style.display = "none";
    open = true;
    } else {
        hamburger.style.backgroundImage = "url('../img/hamburger_menu.svg')";
        nav.classList.add("d-none");
        nav.classList.add("d-md-block");
        containerBody.style.backgroundColor = "";
        textRow.style.display = "";
        circleSquareRow.style.display = "";
        socialMediaText.style.display = "";
        open = false;
    }
}


const rotate360 = function() { 
    if(circleSquare.style.transform == "rotate(360deg)") {
        circleSquare.style.transform = null;
    } else {
        circleSquare.style.transform += "rotate(360deg)";
    }      
            
}

hamburger.addEventListener("click", displayMenu);
circleSquare.addEventListener("click", rotate360);
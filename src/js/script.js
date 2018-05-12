const hamburger = document.getElementById("hamburger");
const hamburgerExit = document.getElementById("hamburger-exit");
const nav = document.getElementById("nav");
const circleSquare = document.getElementById("circle-square");
const containerBody = document.getElementById("full-screen-container");
const textRow = document.getElementById("text-row");
const circleSquareRow = document.getElementById("circleSquareRow");
const socialMediaText = document.getElementById("social-media-text");
const triangleRow = document.getElementById("triangle-row");
const icon = document.getElementsByClassName("icon");
const iconP = document.getElementsByClassName("icon-p");
let rotated = false;

const displayMenu = function() {
    hamburger.style.display = "none";
    hamburgerExit.style.display = "block";
    nav.classList.remove("d-none");
    nav.classList.remove("d-md-block");
    containerBody.style.backgroundColor = "#001820";
    containerBody.style.width = "100%";
    containerBody.style.height = "100vh";
    textRow.style.display = "none";
    circleSquareRow.style.display = "none";
    socialMediaText.style.display = "none";
    triangleRow.style.display = "none";
    open = true;
    for (i=0; i<3; i++) {
        iconP[i].style.display = "none";
        icon[i].classList.remove("col-md-2");
        icon[i].style.padding = "5vh";
    }
}

const hideMenu = function() {
    hamburgerExit.style.display = "none";
    hamburger.style.display = "";
    hamburger.style.backgroundImage = "url('../img/hamburger_menu.svg')";
    nav.classList.add("d-none");
    nav.classList.add("d-md-block");
    containerBody.style.backgroundColor = "";
    textRow.style.display = "";
    circleSquareRow.style.display = "";
    socialMediaText.style.display = "";
    triangleRow.style.display = "";
    for (i=0; i<3; i++) {
        iconP[i].style.display = "";
        icon[i].classList.add("col-md-2");
        icon[i].style.padding = "";
    }
    open = false;
}

const rotate360 = function() { 
    if(circleSquare.style.transform == "rotate(360deg)") {
        circleSquare.style.transform = null;
    } else {
        circleSquare.style.transform += "rotate(360deg)";
        }             
}

hamburger.addEventListener("click", displayMenu);
hamburgerExit.addEventListener("click", hideMenu);
circleSquare.addEventListener("click", rotate360);
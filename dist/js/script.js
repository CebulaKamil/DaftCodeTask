const hamburger=document.getElementById("hamburger"),nav=document.getElementById("nav"),circleSquare=document.getElementById("circle-square"),containerBody=document.getElementById("container-body"),textRow=document.getElementById("text-row"),circleSquareRow=document.getElementById("circleSquareRow"),socialMediaText=document.getElementById("social-media-text");let open=!1,rotated=!1;const displayMenu=function(){0==open?(hamburger.style.backgroundImage="url('../img/iks.svg')",nav.classList.remove("d-none"),nav.classList.remove("d-md-block"),containerBody.style.backgroundColor="#001820",textRow.style.display="none",circleSquareRow.style.display="none",socialMediaText.style.display="none",open=!0):(hamburger.style.backgroundImage="url('../img/hamburger_menu.svg')",nav.classList.add("d-none"),nav.classList.add("d-md-block"),containerBody.style.backgroundColor="",textRow.style.display="",circleSquareRow.style.display="",socialMediaText.style.display="",open=!1)},rotate360=function(){"rotate(360deg)"==circleSquare.style.transform?circleSquare.style.transform=null:circleSquare.style.transform+="rotate(360deg)"};hamburger.addEventListener("click",displayMenu),circleSquare.addEventListener("click",rotate360);
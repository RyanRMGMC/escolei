function openSidebar() {
    if(window.innerWidth > 600){
        document.getElementById("mySidebar").style.width = "40%";
        document.querySelector(".menu img").src = "./images/buttons/close_menu_button.png";
        document.querySelector(".row").style.marginRight = "30%";
        document.querySelector(".row").style.transition = "0.35s";
    }else{
        document.getElementById("mySidebar").style.width = "100%";
        document.querySelector(".menu img").src = "./images/buttons/close_menu_button.png";   
    }
}

function closeSidebar() {
    document.getElementById("mySidebar").style.width = "0";
    document.querySelector(".menu img").src = "./images/buttons/menu_button.png";
    document.querySelector(".row").style.marginRight = "0";
    document.querySelector(".row").style.transition = "0.65s";
}
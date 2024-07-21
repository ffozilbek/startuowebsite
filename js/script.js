// SITE HEADER NAVBAR OPEN AND CLOSE
const elHeader = document.querySelector(".site-header"),
    elBurgerMenu = elHeader.querySelector(".burger-menu");

    if(elBurgerMenu) {
        elBurgerMenu.addEventListener("click", ()=> {
            elHeader.classList.toggle("nav-open");
        })
    }
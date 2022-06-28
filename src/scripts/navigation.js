
const navSection = document.querySelector(".navSection");
const navSectionLinks = document.querySelectorAll(".navSection__left--nav a")
const menuOpenIcon = document.querySelector(".menu-open-icon")
const menuCloseIcon = document.querySelector(".menu-close-icon")

menuCloseIcon.classList.add("hide")
navSectionLinks.forEach(el=>{
    el.classList.add("hideMenu")
})

const openBurgerMenu = e =>{
    navSectionLinks.forEach(el=>{
        if(el===e.target){
            el.style.color = "red"
            el.style.filter = "blur(0px)"
        }
        else{
            el.style.color = "black"
            el.style.filter = "blur(1.5px)"
        }
    })
    if(e.target.matches(".menu-open-icon")){
        navSectionLinks.forEach(el=>{
            el.style.filter = "blur(0px)"
            el.classList.remove("hideMenu")
        })
        menuOpenIcon.classList.add("hide")
        menuCloseIcon.classList.remove("hide")
    }
    if(e.target.matches(".menu-close-icon")){
        navSectionLinks.forEach(el=>{
            el.classList.add("hideMenu")
        })
        menuOpenIcon.classList.remove("hide")
        menuCloseIcon.classList.add("hide")
    }
}



navSection.addEventListener("click", openBurgerMenu)

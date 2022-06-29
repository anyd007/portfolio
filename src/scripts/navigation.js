
const navSection = document.querySelector(".navSection");
const navSectionLinks = document.querySelectorAll(".navSection__left--nav a")
const menuOpenIcon = document.querySelector(".menu-open-icon")
const menuCloseIcon = document.querySelector(".menu-close-icon")
const moreAboutMe = document.querySelector(".moreAboutMe")
const contactPopup = document.querySelector(".hero__contact")
const contact = document.querySelector("#contact")

menuCloseIcon.classList.add("hide")
navSectionLinks.forEach(el=>{
    el.classList.add("hideMenu")
})

const openBurgerMenu = e =>{
    if(e.target.matches(".menu-open-icon")){
        navSectionLinks.forEach(el=>{
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

const navEffect = e =>{
    navSectionLinks.forEach(el=>{
        el.style.filter = "blur(0px)"
        if(el!==e.target){
            el.style.color = "black"
            el.style.filter = "blur(1.5px)"
        }
        else{
            el.style.color = "red"
            el.style.filter = "blur(0px)"
        }
    })
}

const removeNavEffect = () =>{
    navSectionLinks.forEach(el=>{
        el.style.filter = "blur(0px)"
        el.style.color = "black"
    })
}


navSection.addEventListener("click", openBurgerMenu)
navSection.addEventListener("mouseover", navEffect)
navSection.addEventListener("mouseout", removeNavEffect)
contact.addEventListener("click", () =>{
    contactPopup.classList.remove("hideContact")
})



const cvBtn = document.querySelector(".cv")
const cv = document.querySelector(".aboutSection__cv")


const openCV = e =>{
    if(e.target.matches(".cv")){
        cv.classList.remove("hideImg")
    }
    if(e.target.matches(".aboutSection__cv--icon")){
        cv.classList.add("hideImg")
    }
}


window.addEventListener("click", openCV)
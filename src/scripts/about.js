const photo = document.querySelector(".aboutSection__right--img")
const photoText = document.querySelector(".photoText")
photo.addEventListener("click", () =>{
    photo.style.opacity = "1"
    photo.classList.add("photo")
    photoText.classList.remove("hideText")
    setTimeout(()=>{
        photoText.classList.add("hideText")
    },4500)
    setTimeout(()=>{
        photo.classList.remove("photo")
    }, 1500)
})

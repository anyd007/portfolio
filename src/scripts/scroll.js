const scrollArrow = document.querySelector(".scrollArrow")

const showScroll = () =>{
    let scrolled = window.scrollY;
    if(scrolled > 200){
        scrollArrow.classList.remove("hideScroll")
    }
    else{
        scrollArrow.classList.add("hideScroll")
    }
}


window.addEventListener("scroll", showScroll)
scrollArrow.addEventListener("click", () =>{
    document.documentElement.scrollTop = 0;
})
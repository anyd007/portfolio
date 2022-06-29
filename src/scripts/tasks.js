
const tasks = document.querySelector(".tasks")

const openTasks = e =>{
    if(e.target.matches("#tic-tac-toe")){
        window.open("https://tic-tac-toe-andrew.herokuapp.com")
    }else if(e.target.matches("#nba")){
        window.open("https://react-node-app-db.herokuapp.com")
    }else if(e.target.matches("#autocomplite")){
        window.open("https://autocompleteboilerplate.herokuapp.com")
    }else if(e.target.matches("#bootstrap")){
        window.open("https://gallant-heisenberg-05c478.netlify.app")
    }
}

tasks.addEventListener("click", openTasks)
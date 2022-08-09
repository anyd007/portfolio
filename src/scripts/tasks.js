
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
    else if(e.target.matches("#workout")){
        window.open("https://mern-workout.herokuapp.com/")
    }
    else if(e.target.matches("#sass-portfolio")){
        window.open("https://anyd007.github.io/scss-exercises/dist/index.html")
    }
}

tasks.addEventListener("click", openTasks)
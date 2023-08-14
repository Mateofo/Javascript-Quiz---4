let highScores = document.getElementById("highScores")

function getHighScores() {
    let storeUser;
    if(JSON.parse(localStorage.getItem(highScores)) === null) {
        storedUsers= []
        }
        else{
            storedUsers = JSON.parse(localStorage.getItem("highScores"))
        }
        for (let i = 0; i < storedUsers.length; i++) {
            let scoresDiv = document.createElement("div")
            scoresDiv.textContent = "User: " + storedUsers[i] + "Score" + storedUsers[i].userScore
            highScores.append(scoresDiv)
        }
}

getHighScores();
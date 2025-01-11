// Made by adrian gonzalez-pacheco copyright 2025


// sets up data for the game
var gameData = {
    Total:1,
    numberPerClick:1,
    aVariableCost:20,
    avariable:["a", 1],
    totalProduction:0
}

function Refresher() {
    document.getElementById("avariblebuyer").innerHTML = "add a variable to your equation that will increase your number incrementaly for the cost of " + gameData.aVariableCost + " of your number"


}

// clicking to increase your number
function increaseNumber() {
    gameData.Total += gameData.numberPerClick
    // Refreshs game
    document.getElementById("totalNumber").innerHTML = gameData.Total + "=" + gameData.Total
}


//Varible buyer
function BuyaAvariable() {
    if (gameData.Total >= aVariableCost) {
        gameData.Total -= gameData.aVariableCost
        gameData.aVariableCost *= 1.7
       gameData.avariable.findIndex[1] +=1
       document.getElementById("totalNumber").innerHTML = gameData.Total + "=" + gameData.Total
    }
     else {
        document.getElementById("log").innerHTML = "You still need" + (gameData.aVariableCost - gameData.Total) + "more of your number"
    }
    CheckTotalProduction() 
}

 
// checks how much number you produce.
function CheckTotalProduction() {
    gameData.totalProduction = avariable.findIndex[1]
}
function increaseNumberPerSecond() {
    gameData.Total += gameData.totalProduction
}


var mainGameLoop = window.setInterval(function() {
    increaseNumberPerSecond()
    Refresher()
}, 1000)
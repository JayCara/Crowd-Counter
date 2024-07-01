let countEL = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")

function increment() {
    count += 1
    countEL.innerText = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    countEL.textContent = count
}



// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// Console.log the value after each step

//let bonusPoints = 50
//console.log(bonusPoints)

//bonusPoints = bonusPoints + 50
//console.log(bonusPoints)

//bonusPoints = bonusPoints - 75
//console.log(bonusPoints)

//bonusPoints = bonusPoints + 45
//console.log(bonusPoints)




//let lapsCompleted = 0
//
//function incrementLap() {
//    lapsCompleted = lapsCompleted + 1       
//}
//
//incrementLap()
//incrementLap()
//incrementLap()
//
//console.log(lapsCompleted)
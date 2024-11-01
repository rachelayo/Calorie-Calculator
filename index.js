// Getting input fields
const walkingInput = document.getElementById("walktime")
const runningInput = document.getElementById("runtime")
const cyclingInput = document.getElementById("cycletime")
const button = document.getElementById("button")
const calorieTotal = document.getElementById("figure")
const caloriesBurnedText = document.getElementById("calories-burned-text")

// Calorie calculation function 
function calorieCounter(walkingtime, runningtime, cyclingtime) {
    const walkingCaloriesaMin = 5
    const runningCaloriesaMin = 10
    const cyclingCaloriesaMin = 8

    const walkingCaloriesBurnt = walkingtime * walkingCaloriesaMin
    const runningCaloriesBurnt = runningtime * runningCaloriesaMin
    const cyclingCaloriesBurnt = cyclingtime * cyclingCaloriesaMin

    const totalCaloriesBurnt = walkingCaloriesBurnt + runningCaloriesBurnt + cyclingCaloriesBurnt

    return totalCaloriesBurnt
}

// Listening or a click event
button.addEventListener("click", function(event){
    event.preventDefault();

    // Getting their values & converting to an integer
    const walkingtime = parseInt(walkingInput.value) || 0
    const runningtime = parseInt(runningInput.value) || 0
    const cyclingtime = parseInt(cyclingInput.value) || 0

    // Total calories burned
    const resultOfCalories = calorieCounter(walkingtime, runningtime, cyclingtime)

    // Displaying result
    calorieTotal.textContent = resultOfCalories
    caloriesBurnedText.style.display = "block"
})
let totalCalories = 0;

function addCalorieEntry() {
    const food = document.getElementById('food').value;
    const calories = document.getElementById('calories').value;

    if (food && calories) {
        const entry = document.createElement('div');
        entry.innerHTML = `${food} - ${calories} Calories`;
        document.getElementById('calorie-entries').appendChild(entry);

        totalCalories += parseInt(calories);
        document.getElementById('total-calories').innerText = `Total Calories: ${totalCalories}`;

        document.getElementById('calorie-form').reset();
    } else {
        alert('Please enter both food item and calories.');
    }
}

let heightElement = document.querySelector("#height");
let weightElement = document.querySelector("#weight");
let submitButton = document.querySelector("#submit");
let bmiElement = document.querySelector("#bmi");

function calculateBMI(height, weight) {
    let value = weight/(height * height * 0.0254 * 0.0254);
    bmiElement.textContent = value;
}

submitButton.addEventListener('click', () => calculateBMI(Number(heightElement.value), Number(weightElement.value)));


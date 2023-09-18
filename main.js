const weight = document.querySelector('#weight');
const height = document.querySelector('#height');
const calulateButton = document.querySelector('.calulate-bmi');
const output = document.querySelector('#output');
const outputWeightStatus = document.querySelector('#weight-status');
const form =document.querySelector('form');
const weightError = document.querySelector(".weight-input-error");
const heightError = document.querySelector(".height-input-error");
let isProperWeight = false;
let isProperHeight = false;

weight.addEventListener('input', () => {
    if (isNaN(weight.value) || weight.value <= 1 || weight.value == "") {
        weightError.classList.add('show-error-msg');
        isProperWeight = false;
        enableDisableButton();
    } else {
        weightError.classList.remove('show-error-msg');
        isProperWeight = true;
        enableDisableButton();
    }
});

height.addEventListener('input', () => {
    if (isNaN(height.value) || height.value <= 1 || height.value == "") {
        heightError.classList.add('show-error-msg');
        isProperHeight = false;
        enableDisableButton();
    } else {
        heightError.classList.remove('show-error-msg');
        isProperHeight = true;
        enableDisableButton();
    }
});

function enableDisableButton() {
    if (isProperHeight && isProperWeight) {
        calulateButton.removeAttribute('disabled');
    } else {
        calulateButton.setAttribute('disabled', true);
    }
    output.textContent = '';
    outputWeightStatus.textContent = '';
}

function calculateBMI() {
    return ((weight.value*10000)/(height.value*height.value)).toFixed(2);
}

calulateButton.addEventListener('click', () => {
    const bmiValue = calculateBMI();
    let bmiStatus = '';
    if (bmiValue < 18.5) {
        bmiStatus = 'Underweight'
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        bmiStatus = 'Healthy Weight';
    } else if (bmiValue >= 24.9 && bmiValue < 29.9) {
        bmiStatus = 'Overweight';
    } else {
        bmiStatus = 'Obesity';
    }
    output.textContent = `BMI - ${bmiValue}`;
    outputWeightStatus.textContent = `Weight Status - ${bmiStatus}`;
});

form.addEventListener('submit',(e) => {
    e.preventDefault();
});


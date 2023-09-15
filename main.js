const weight = document.querySelector('#weight');
const height = document.querySelector('#height');
const calulateButton = document.querySelector('.calulate-bmi');
const output = document.querySelector('#output');
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
}

function calculateBMI() {
    return ((weight.value*10000)/(height.value*height.value)).toFixed(3);
}

calulateButton.addEventListener('click', () => {
    output.textContent = calculateBMI();
});

form.addEventListener('submit',(e) => {
    e.preventDefault();
});


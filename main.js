const weight = document.querySelector('#weight');
const height = document.querySelector('#height');
const calulateButton = document.querySelector('#calulate-bmi');
const output = document.querySelector('#output');
const form =document.querySelector('form');

weight.addEventListener('change', () => {
    let isValid = /^-?\d+(\.\d+)?$/.test(weight.value);
    if (!isValid) {
        alert('Please enter a proper decimal number');
    }
});

height.addEventListener('change', () => {
    let isValid = /^-?\d+(\.\d+)?$/.test(height.value);
    if (!isValid) {
        alert('Please enter a proper decimal number');
    }
});

function calculateBMI() {
    return ((weight.value*10000)/(height.value*height.value)).toFixed(3);
}

calulateButton.addEventListener('click', () => {
    output.textContent = calculateBMI();
});

form.addEventListener('submit',(e) => {
    e.preventDefault();
});


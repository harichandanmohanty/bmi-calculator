const weight = document.querySelector('#weight');
const height = document.querySelector('#height');
const calulateButton = document.querySelector('#calulate-bmi');
const output = document.querySelector('#output');
const form =document.querySelector('form');

// weight.addEventListener('change', () => {
//     if (isNaN(weight.value) || weight.value < 1 || weight.value == "") {
//         alert('Please enter a proper decimal number');
//     }
// });

// height.addEventListener('change', () => {
//     if (isNaN(height.value) || height.value < 1 || weight.value == "") {
//         alert('Please enter a proper decimal number');
//     }
// });

function calculateBMI() {
    if (isNaN(height.value) || height.value < 1 || weight.value == "") {
        return 'Please enter a proper number';
    }else if (isNaN(weight.value) || weight.value < 1 || weight.value == "") {
        return 'Please enter a proper number';
    } else {
        return ((weight.value*10000)/(height.value*height.value)).toFixed(3);
    }
}

calulateButton.addEventListener('click', () => {
    output.textContent = calculateBMI();
});

form.addEventListener('submit',(e) => {
    e.preventDefault();
});


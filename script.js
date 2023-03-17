const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const message = document.querySelector('#message');

    if ((height === '') || (height < 0) || (isNaN(height))) {
        results.innerHTML = "Proporcione una altura válida";

    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = "Proporcione un peso válido";
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`

        if (bmi < 18.6) {
            message.innerHTML = "Estas bajo de peso";
        } else if (bmi > 18.6 && bmi < 24.9) {
            message.innerHTML = "Peso excelente"
        } else if (bmi > 24.9) {
            message.innerHTML = "Tienes sobrepeso"
        }
    }
});
'use strict'
let cards;
cards = document.querySelectorAll('.card');
const regValues = document.querySelectorAll('.reg-value');
const alanyaValue = regValues[0];
const cyprusValue = regValues[1];

// console.log(regValues);

alanyaValue.classList.add('alanya-value');
cyprusValue.classList.add('cyprus-value');

cards.forEach (e => {
    let alanyaDataset = e.dataset.city == "alanya";
    if (e.dataset.city == "alanya") {
        e.classList.add('alanya');
    }
    if (e.dataset.city == "cyprus") {
        e.classList.add('cyprus');
    }
    cyprusValue.textContent = document.querySelectorAll('.cyprus').length;
    alanyaValue.textContent = document.querySelectorAll('.alanya').length;
});
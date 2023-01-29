'use strict'

const wrapperCall = document.querySelectorAll('.wrapper-call');
const callback = document.querySelector('.callback');
const close = document.querySelectorAll('.heading-close');
const h2 = document.querySelectorAll('h2');
const verticalCards = document.querySelectorAll('.vertical__card');
const horizontalCards = document.querySelectorAll('.horizontal__card');
const burger = document.querySelector('.burger');
const heart = document.querySelectorAll('.heart');
const priceInput = document.querySelector('#priceInput');
const cityInput= document.querySelector('.options__city');
const cityList = document.querySelector('.city__list');
const cardId = document.querySelectorAll('.card-id');

priceInput.addEventListener('input', () =>{
    if (priceInput.value < 0) {
        priceInput.value = 191000;
        priceInput.style.borderColor = 'red';
    }else{
        priceInput.style.borderColor = 'white';
    }
})

cityInput.addEventListener('click', () =>{
    cityList.classList.toggle('hidden')
})

heart.forEach(e => e.removeAttribute('href'));
h2.forEach(e => e.classList.add('heading'));
wrapperCall.forEach(e => e.addEventListener('click',()=>{
    callback.classList.toggle('modal-active');
}));

burger.addEventListener('click', () =>{
    const burgerMenu = document.querySelector('.burger__menu')
    burgerMenu.classList.toggle('active')
});

verticalCards.forEach(e => e.classList.add('card'));
horizontalCards.forEach(e => e.classList.add('card'));

close.forEach(e => e.addEventListener('click',()=>{
    callback.classList.toggle('modal-active')
}));

for (let i = 0; i < cardId.length; i++) {
    cardId[i].textContent = 'FA' + i;
}
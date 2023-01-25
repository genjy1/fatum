'use strict'

const wrapperCall = document.querySelector('.wrapper-call');
const callback = document.querySelector('.callback');
const close = document.querySelector('.heading-close');
const h2 = document.querySelectorAll('h2');
const verticalCards = document.querySelectorAll('.vertical__card');
const horizontalCards = document.querySelectorAll('.horizontal__card');
const burger = document.querySelector('.burger');

h2.forEach(e => e.classList.add('heading'));
wrapperCall.addEventListener('click',()=>{
    callback.classList.toggle('modal-active')
});

burger.addEventListener('click', () =>{
    const burgerMenu = document.querySelector('.burger__menu')
    burgerMenu.classList.toggle('active')
});

verticalCards.forEach(e => e.classList.add('card'));
horizontalCards.forEach(e => e.classList.add('card'));

close.addEventListener('click',()=>{
    callback.classList.toggle('modal-active')
});


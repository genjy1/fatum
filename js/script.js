'use strict'

const wrapperCall = document.querySelector('.wrapper-call');
const callback = document.querySelector('.callback');
const close = document.querySelector('.heading-close');
const h2 = document.querySelectorAll('h2');

h2.forEach(e => e.classList.add('heading'));
wrapperCall.addEventListener('click',()=>{
    callback.classList.toggle('modal-active')
});

close.addEventListener('click',()=>{
    callback.classList.toggle('modal-active')
});


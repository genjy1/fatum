'use strict'

const wrapperCall = document.querySelector('.wrapper-call');
const callback = document.querySelector('.callback');
const close = document.querySelector('.heading-close');

wrapperCall.addEventListener('click',()=>{
    callback.classList.toggle('modal-active')
});

close.addEventListener('click',()=>{
    callback.classList.toggle('modal-active')
});


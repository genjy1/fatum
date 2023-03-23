'use strict';

const wrapperCall = document.querySelectorAll('.wrapper-call');
const callback = document.querySelector('.callback');
const close = document.querySelectorAll('.heading-close');
const h2 = document.querySelectorAll('h2');
const verticalCards = document.querySelectorAll('.vertical__card');
const horizontalCards = document.querySelectorAll('.horizontal__card');
const burger = document.querySelector('.burger');
const heart = document.querySelectorAll('.heart');
const cityInput= document.querySelector('.options__city');
const cityList = document.querySelector('.city__list');
const cardId = document.querySelectorAll('.card-id');
const moreFilters = document.querySelector('.more-filters');

moreFilters.addEventListener('click', e =>{
    e.preventDefault();
    e.target.textContent = 'Скрыть фильтры';
    e.target.classList.toggle('extended');
    const moreFiltersLabel = document.querySelector('.more-filters__label');
    moreFiltersLabel.classList.toggle('active__filter');
})

moreFilters.addEventListener('click',e => {
    if (e.target.classList.contains('extended') == false) {
        e.target.textContent = 'Больше фильтров';
    }
})

const filterOptCity = document.querySelector('#citySelect');
filterOptCity.addEventListener('click', e =>{
    console.log(filterOpt.value);
    const filterLink = document.querySelector('.search-submit');
    filterLink.setAttribute('href',`../pages/filter.html?=${filterOptCity.value}`)
});
const filterOpt = document.querySelector('#districtSelect');
filterOpt.addEventListener('click', e =>{
    console.log(filterOpt.value);
    const filterLink = document.querySelector('.search-submit');
    filterLink.setAttribute('href',`../pages/filter.html?=${filterOpt.value}`)
});

heart.forEach(e => e.removeAttribute('href'));
h2.forEach(e => e.classList.add('heading'));
wrapperCall.forEach(e => e.addEventListener('click',()=>{
    callback.classList.toggle('modal-active');
}));

burger.addEventListener('click', () =>{
    const burgerMenu = document.querySelector('.burger__menu');
    burgerMenu.classList.toggle('active');
});

verticalCards.forEach(e => e.classList.add('card'));
horizontalCards.forEach(e => e.classList.add('card'));

close.forEach(e => e.addEventListener('click',()=>{
    callback.classList.toggle('modal-active')
}));

for (let i = 0; i < cardId.length; i++) {
    let cards = document.querySelectorAll('.card')
    cards[i].setAttribute('data-id',i);
    cardId[i].textContent = 'FA' + i;
}
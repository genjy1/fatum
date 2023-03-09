import { cards } from "/js/cards.js";

const id = Number(window.location.search.slice(4,5));
let pageTitle = document.querySelector('title')
let bodyBackground = document.querySelector('body');
const main = document.querySelector('.main');
let filmWrapper = document.createElement('div')
let filmName = document.createElement('h1');
let filmImg = document.createElement('img');
let filmDesc = document.createElement('p');
let leftSide = document.createElement('div');
let rightSide = document.createElement('div');
let trailer = document.createElement('video');
let mobile = document.querySelector('.wrapper__leftSide');

pageTitle.textContent = `${cards[id].name}` + ' ' + '—' + ' ' + 'Fatum';
cardWrapper.classList.add('card__wrapper')
cardName.classList.add('card-name');
cardImg.classList.add('card-img');
cardImg.setAttribute('title','title');
cardImg.title = cards[id].name;
cardImg.src = cards[id].url;
cardDesc.classList.add('film-description')
leftSide.classList.add('wrapper__leftSide');
rightSide.classList.add('wrapper__rightSide');
main.append(cardWrapper);
filmWrapper.append(leftSide);
filmWrapper.append(rightSide);
rightSide.append(filmName);
leftSide.append(filmImg);
leftSide.append(trailer)
rightSide.append(filmDesc);

cardName.textContent = `${cards[id].name}` + ' ' + `(${cards[id].year})`;
cardDesc.textContent = `${cards[id].fullDesc}`;
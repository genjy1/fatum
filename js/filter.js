'use strict';
const city = window.location.search.slice(2,9);

if (city === 'cyprus') {
    document.querySelectorAll('.vertical__card').forEach(e =>{
        if (e.dataset.city !== 'cyprus'){
            e.remove();
        }
    });
}else if (city === 'alanya'){
    document.querySelectorAll('.vertical__card').forEach(e =>{
        if (e.dataset.city !== 'alanya'){
            e.remove();
        }
    });
};

for (let i = 0; i < cardId.length; i++) {
    cardId[i].textContent = 'FA' + i;
}
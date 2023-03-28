'use strict';
const search = window.location.search;


if (search.includes('cyprus')) {
    document.querySelectorAll('.vertical__card').forEach(e =>{
        if (e.dataset.city !== 'cyprus'){
            e.remove();
        }
    });
}else if (search.includes('alanya')){
    document.querySelectorAll('.vertical__card').forEach(e =>{
        if (e.dataset.city !== 'alanya'){
            e.remove();
        }
    });
};

for (let i = 0; i < cardId.length; i++) {
    cardId[i].textContent = 'FA' + i;
}
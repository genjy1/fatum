'use strict'

const city = window.location.search.slice(2,9);
console.log(city);

if (city === 'cyprus') {
    document.querySelectorAll('.vertical__card').forEach(e =>{
        if (e.dataset.city !== 'cyprus'){
            e.style.display = 'none'
        }
    });
}else if (city === 'alanya'){
    document.querySelectorAll('.vertical__card').forEach(e =>{
        if (e.dataset.city !== 'alanya'){
            e.style.display = 'none'
        }
    });
}


'use strict';

window.onload = () =>{
    let input = document.querySelector('#options-search')
    input.oninput = function () {
        let value = this.value.trim();
        let cardId = document.querySelectorAll('.card');

        if (value != '') {
            cardId.forEach(elem =>{
                if (elem.dataset.id.search(value) == -1) {
                    elem.classList.add('hide');
                }
            });
        }else{
            cardId.forEach(elem =>{
                elem.classList.remove('hide');
            });
        }
    };
}
const favWrapper = document.querySelector('.fav__wrapper');

window.addEventListener('click',function (event) {
    
    if (event.target.hasAttribute('data-fav')) {
        console.log('clicked at fav');
        const card =  event.target.closest('.heart__wrapper');
        console.log(card);
        const prodInf = {
            id:card.dataset.id,
            imgSrc: card.querySelector('.img').getAttribute('src'),
        };
        console.log(prodInf);

        const favItemHTML = `<div class="heart__wrapper" data-id="${prodInf.id}">
        <a href="#" class="heart" data-fav></a>
            <img src="${prodInf.imgSrc}" alt="" class="img">
        </div>
        `;

        favWrapper.insertAdjacentHTML('beforeend',favItemHTML);
    }
    
})


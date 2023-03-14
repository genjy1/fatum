const favWrapper = document.querySelector('.fav__wrapper');
const favLink = document.querySelector('.fav-img');
const headerLinks = document.querySelector('.header__icons');

favLink.addEventListener('click',() =>{
    favWrapper.classList.toggle('hidden');
});
window.addEventListener('click',function (event) {
    if (event.target.hasAttribute('data-fav')) {
        const card =  event.target.closest('.card');
        const prodInf = {
            imgSrc: card.querySelector('.card-img').getAttribute('style'),
            prodName: card.querySelector('.card-text').textContent,
            prodDistrict:card.querySelector('.card-district').textContent,
            prodRooms:card.querySelector('.card-rooms').textContent,
            prodSquare:card.querySelector('.card-square').textContent,
            prodSea:card.querySelector('.card-tosea').textContent,
            prodCost:card.querySelector('.card-cost').textContent,
        };
        if (window.screen.width < 426) {
            const favItemHTML = `<div class="vertical__card fav__card">
            <div style="${prodInf.imgSrc}" alt="" class="img vertical-img card-img"><div>
                <div class="vertical__cards-text__wrapper cards-text__wrapper">
                    <p class="card-id">ID</p>
                    <p class="card-text">${prodInf.prodName}</p>
                    <div class="wrapper__description">
                        <div class="desc-text__wrapper">
                            <p class="card-district">${prodInf.prodDistrict}</p>
                            
                        </div>
                        <div class="desc-text__wrapper">
                            <p class="card-rooms">${prodInf.prodRooms}</p>
                            
                        </div>
                        <div class="desc-text__wrapper">
                            <p class="card-square">${prodInf.prodSquare}</p>
                            
                        </div>
                        <div class="desc-text__wrapper">
                            <p class="card-tosea">${prodInf.prodSea}</p>
                        </div>
                    </div>
                    <div class="inf__wrapper">
                        <p class="card-cost"">${prodInf.prodCost}</p>
                        <a class="link" data-action="minus" style='font-size:12px'>Удалить из избранного</a>
                    </div>
                </div>
        </div>
        `;
        localStorage.setItem('favItem',favItemHTML);
        favWrapper.insertAdjacentHTML('beforeend',localStorage.getItem('favItem'));
        // favWrapper.insertAdjacentHTML('beforeend',favItemHTML);
        }else{
            const favItemHTML = `<div class="horizontal__card col-card fav__card">
        <div style="${prodInf.imgSrc}" alt="" class="img horizontal-img card-img"></div>
        <div class="cards-text__wrapper">
            <p class="card-id"></p>
            <p class="card-text">${prodInf.prodName}</p>
            <div class="wrapper__description">
            <div class="desc-text__wrapper">
            <p class="card-district">${prodInf.prodDistrict}</p>
            
        </div>
        <div class="desc-text__wrapper">
            <p class="card-rooms">${prodInf.prodRooms}</p>
            
        </div>
        <div class="desc-text__wrapper">
            <p class="card-square">${prodInf.prodSquare}</p>
            
        </div>
        <div class="desc-text__wrapper">
            <p class="card-tosea">${prodInf.prodSea}</p>
        </div>
    </div>
    <div class="inf__wrapper">
        <p class="card-cost"">${prodInf.prodCost}</p>
        <a class="link" data-action="minus" style='font-size:12px'>Удалить из избранного</a>
    </div>
        </div>
    </div>
        `;
        localStorage.setItem('favItem',favItemHTML);
    
        favWrapper.insertAdjacentHTML('beforeend',localStorage.getItem('favItem'));
        };
    };
    if (event.target.dataset.action === 'minus') {
        if (event.target.closest('.fav__wrapper')) {
            event.target.closest('.fav__card').remove();
            this.localStorage.removeItem('favItem');
        }   
    };
});
if (localStorage.getItem('favItem') != null) {
    favWrapper.innerHTML = localStorage.getItem('favItem');
};


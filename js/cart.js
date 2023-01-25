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
            imgSrc: card.querySelector('.card-img').getAttribute('src'),
        };

        if (window.screen.width < 426) {
            const favItemHTML = `<div class="vertical__card fav__card">
            <img src="${prodInf.imgSrc}" alt="" class="img vertical-img card-img">
                <div class="vertical__cards-text__wrapper cards-text__wrapper">
                    <p class="card-id">ID</p>
                    <p class="card-text">Text</p>
                    <div class="wrapper__description">
                        <div class="desc-text__wrapper">
                            <p class="card-district">Район</p>
                            
                        </div>
                        <div class="desc-text__wrapper">
                            <p class="card-rooms">Комнат</p>
                            
                        </div>
                        <div class="desc-text__wrapper">
                            <p class="card-square">Площадь</p>
                            
                        </div>
                        <div class="desc-text__wrapper">
                            <p class="card-toairport">До аэропорта</p>
                            <p class="card-toairport">м</p>
                        </div>
                        <div class="desc-text__wrapper">
                            <p class="card-tosea">До моря</p>
                            <p class="card-tosea">м</p>
                        </div>
                    </div>
                    <div class="inf__wrapper">
                        <p class="card-cost" style="display: none;">Цена: от $000.000</p>
                        <a href="#" class="learnmore link">Узнать подробнее</a>
                        <a href='#' class="link" data-action="minus" style='font-size:12px'>Удалить из избранного</a>
                    </div>
                </div>
        </div>
        `;
        favWrapper.insertAdjacentHTML('beforeend',favItemHTML);
        }else{
            const favItemHTML = `<div class="horizontal__card col-card fav__card">
        <img src="${prodInf.imgSrc}" alt="" class="img horizontal-img card-img">
        <div class="cards-text__wrapper">
            <p class="card-id"></p>
            <p class="card-text">Text</p>
            <div class="wrapper__description">
                <div class="desc-text__wrapper">
                    <p class="card-district">Район</p>
                    <p class="card-district">Район</p>
                </div>
                <div class="desc-text__wrapper">
                    <p class="card-rooms">Комнат</p>
                    <p class="card-rooms">Комнат</p>
                </div>
                <div class="desc-text__wrapper">
                    <p class="card-square">Площадь</p>
                    <p class="card-square">Площадь</p>
                </div>
                <div class="desc-text__wrapper">
                    <p class="card-toairport">До аэропорта</p>
                    <p class="card-toairport">м</p>
                </div>
                <div class="desc-text__wrapper">
                    <p class="card-tosea">До моря</p>
                    <p class="card-tosea">м</p>
                </div>
            </div>
            <div class="inf__wrapper">
                <p class="card-cost" style="display: none;">Цена: от $000.000</p>
                <a href="#" class="learnmore link" style='font-size:12px'>Узнать подробнее</a>
                <a href='#' class="link" data-action="minus" style='font-size:12px'>Удалить из избранного</a>
            </div>
        </div>
    </div>
        `;

        favWrapper.insertAdjacentHTML('beforeend',favItemHTML);
        }
    
        
    };
    if (event.target.dataset.action === 'minus') {
        if (event.target.closest('.fav__wrapper')) {
            event.target.closest('.fav__card').remove();
        }   
    };
    
    localStorage.setItem('favWrapper','flex');
})


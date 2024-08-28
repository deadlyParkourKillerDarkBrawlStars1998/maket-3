var swiperElement = document.querySelector('.swiper');
var moreLessButton = document.querySelector('.brands__read-more');
var buttonText = document.querySelector('.read-more__text');
var expandImage = document.querySelector('.read-more__expand-img');


moreLessButton.addEventListener('click', function () {
    if (!swiperElement.classList.contains('swiper--show-all')) {
        expandImage.classList.add('read-more__expand-img--upside');
        swiperElement.classList.add('swiper--show-all');
        moreLessButton.classList.add('brands__read-more--expanded');
        buttonText.textContent = 'Скрыть';
    } else {
        expandImage.classList.remove('read-more__expand-img--upside');
        swiperElement.classList.remove('swiper--show-all');
        moreLessButton.classList.remove('brands__read-more--expanded');
        buttonText.textContent = 'Показать всё';
    };

})

window.addEventListener('DOMContentLoaded', () => {

    const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
        let swiper;

        breakpoint = window.matchMedia(breakpoint);

        const enableSwiper = function (className, settings) {
            swiper = new Swiper(className, settings);

            if (callback) {
                callback(swiper);
            }
        }

        const checker = function () {
            if (breakpoint.matches) {
                return enableSwiper(swiperClass, swiperSettings);
            } else {
                if (swiper !== undefined) swiper.destroy(true, true);
                return;
            }
        };

        breakpoint.addEventListener('change', checker);
        checker();
    }

    const someFunc = (instance) => {
        if (instance) {
            instance.on('slideChange', function (e) {
                console.log('*** mySwiper.activeIndex', instance.activeIndex);
            });
        }
    };

    resizableSwiper(
        '(max-width: 767.98px)',
        '.swiper',
        {
            direction: 'horizontal',
            loop: true,
            spaceBetween: 16,
            slidesPerView: 'auto',
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        },
        someFunc
    );
});
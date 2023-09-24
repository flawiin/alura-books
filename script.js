<script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>

const swiper = new Swiper('.swiper', {
    spaceBetween: 10,
    slidesPerView: 3,
    pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
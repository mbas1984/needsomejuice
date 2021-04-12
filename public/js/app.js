document.querySelector('.hamburger-menu').addEventListener('click', () => {
    document.querySelector('.nav-wrapper').classList.toggle('change');
});


// Section 3 Pricing Cards
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 70,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  });
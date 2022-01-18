export default () => {
  const swiper = new Swiper(`.swiper-practice`, {
    direction: `horizontal`,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,

    // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 1,
      },

      1024: {
        slidesPerView: 3,
      },
    },

    navigation: {
      nextEl: `.swiper-button-next`,
      prevEl: `.swiper-button-prev`,
    },
  });

  const swiperTeam = new Swiper(`.swiper-team`, {
    direction: `horizontal`,
    loop: true,
    slidesPerView: 1,

    // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
      },
    },

    navigation: {
      nextEl: `.swiper-button-next`,
      prevEl: `.swiper-button-prev`,
    },
  });
};

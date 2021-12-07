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

  const breakpoint = window.matchMedia(`(max-width: 1024px)`);
  let swiperTeam;

  function setSwiperTeam() {
    if (breakpoint.matches === true) {
      swiperTeam = new Swiper(`.swiper-team`, {
        direction: `horizontal`,
        loop: true,
        slidesPerView: 1,

        // Responsive breakpoints
        breakpoints: {
          320: {
            slidesPerView: 1,
          },
        },

        navigation: {
          nextEl: `.swiper-button-next`,
          prevEl: `.swiper-button-prev`,
        },
      });
    } else {
      if (swiperTeam !== undefined) {
        swiperTeam.destroy(true, true);
      }
    }
  }

  breakpoint.addEventListener(`change`, setSwiperTeam);
  setSwiperTeam();
};

jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  // swiper zoom fadein/outのパラメータ設定
  let swipeOption = {
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed: 3000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };
  new Swiper(".swiper-container", swipeOption);
});

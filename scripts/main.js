// 以下、PICK UPスライダー
$(document).ready(function(){
  $('.carousel__area').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 984,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});

// 以下、メニューボタンイベント

const menuBtn = document.querySelector('.menu__btn');
const cover = document.querySelector('.menu__bg');
const slide = document.querySelector('.menu__slide');

menuBtn.addEventListener('click', function() {
  menuBtn.classList.toggle('menu-open');
});

menuBtn.addEventListener('click', function() {
  cover.classList.toggle('menu-open');
  slide.classList.toggle('menu-open');
});

cover.addEventListener('click', function(){
  cover.classList.toggle('menu-open');
  menuBtn.classList.toggle('menu-open');
  slide.classList.toggle('menu-open');
});
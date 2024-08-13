// JavaScript kodu
document.querySelector('.button i').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});


const swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
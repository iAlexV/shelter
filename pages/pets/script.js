"use strict"

const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  }
};

if (isMobile.any()) {
  document.body.classList.add('_touch');
} else {
  document.body.classList.add('_pc');
}

// Бургер

const burgerMenu = document.querySelector('.header_burger');
const bodyMenu = document.querySelector('.header_nav');
const headerLogo = document.querySelector('.header_logo');
const header = document.querySelector('.header');
const shadow = document.querySelector('.shadow');
if (burgerMenu) {

  burgerMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock');
    burgerMenu.classList.toggle('_active');
    bodyMenu.classList.toggle('_active');
    headerLogo.classList.toggle('_active');
    header.classList.toggle('_active');
    shadow.classList.toggle('_active');
  });
  shadow.addEventListener('click', function (e) {
    document.body.classList.remove('_lock');
    burgerMenu.classList.remove('_active');
    bodyMenu.classList.remove('_active');
    headerLogo.classList.remove('_active');
    header.classList.remove('_active');
    shadow.classList.remove('_active');
  });
}


// Плавный скролл
const menuLink = document.querySelectorAll('a[data-goto]'); //для плавного скрола

if (menuLink.length > 0) {
  menuLink.forEach(menuLink => {
    menuLink.addEventListener('click', onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight;

      if (burgerMenu.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        burgerMenu.classList.remove('_active');
        bodyMenu.classList.remove('_active');
        headerLogo.classList.remove('_active');
        header.classList.remove('_active');
        shadow.classList.remove('_active');
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth'
      });
      e.preventDefault();
    }
  }
}
// Плавный скролл



import floatingView from './views/floatingView.js';
import navigationView from './views/navigationView.js';
import sidebarView from './views/sidebarView.js';
import containerView from './views/containerView.js';

const header = document.querySelector('.header');
const headerLogo = document.querySelector('.header__logo');
const searchModal = document.querySelector('.search');
const navigation = document.querySelector('.header__navigation');
const leftContainer = document.querySelector('.main__left');
const rightContainer = document.querySelector('.main__right');
const movies = document.querySelectorAll('.movie');
const searchIcon = document.querySelector('.icon--search');
const searchIcon_2 = document.querySelector('.icon--search-2');
const crossMenu = document.querySelector('.icon--main');
const crossMenu_2 = document.querySelector('.icon--x-2');
const inputSlider = document.querySelector('.main__input');
const sliderValue = document.querySelector('.main__slider--text');
const chevronIcon = document.querySelectorAll('.icon--chevron');
const floatingContainer = document.querySelector('.floating-navbar__container');

const init = function () {
  floatingView.init();
  navigationView.init();
  sidebarView.init();
  containerView.init();
};

init();

sliderValue.textContent = inputSlider.value;

inputSlider.addEventListener('input', () => {
  sliderValue.textContent = inputSlider.value;
});

// On pressing the chevronIcon the sliderValue should be incremented or decremented
chevronIcon.forEach(chevron => {
  chevron.addEventListener('click', e => {
    if (e.target.classList.contains('up')) {
      inputSlider.value--;
      sliderValue.textContent = inputSlider.value;
    } else if (e.target.classList.contains('down')) {
      inputSlider.value++;
      sliderValue.textContent = inputSlider.value;
    }
  });
});

// crossMenu_2.addEventListener('click', () => {
//   searchModal.classList.add('search-hidden');
//   searchModal.closest('.search__wrapper').classList.add('search-hidden-2');
//   rightContainer.style.filter = 'blur(0px) brightness(1)';
//   movies.forEach(movie => (movie.style.pointerEvents = 'auto'));
//   header.style.filter = 'blur(0px)';
//   floatingContainer.style.pointerEvents = 'auto';
//   floatingContainer.style.filter = 'blur(0px)';
//   navigation.style.pointerEvents = 'auto';
// });

// searchIcon_2.addEventListener('click', () => {
//   searchModal.classList.add('search-hidden');
//   searchModal.closest('.search__wrapper').classList.add('search-hidden-2');
//   rightContainer.style.filter = 'blur(0px) brightness(1)';
//   movies.forEach(movie => (movie.style.pointerEvents = 'auto'));
//   header.style.filter = 'blur(0px)';
//   floatingContainer.style.pointerEvents = 'auto';
//   floatingContainer.style.filter = 'blur(0px)';
//   navigation.style.pointerEvents = 'auto';
// });



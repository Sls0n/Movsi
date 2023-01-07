import icons from 'url:../img/sprite.svg';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const container = document.querySelector('.container');
const header = document.querySelector('.header');
const headerLogo = document.querySelector('.mainMenu');
const navigation = document.querySelector('.header__navigation');
const main = document.querySelector('.main');
const leftContainer = document.querySelector('.main__left');
const rightContainer = document.querySelector('.main__right');
const movies = document.querySelectorAll('.movie');
const mainMenu = document.querySelector('.mainMenu');
const crossMenu = document.querySelector('.icon--main');

headerLogo.addEventListener('click', () => {
  leftContainer.classList.toggle('hidden');
  rightContainer.style.filter = 'blur(5px) brightness(0.8)';
  movies.forEach(movie => (movie.style.pointerEvents = 'none'));
});

rightContainer.addEventListener('click', () => {
  if (!leftContainer.classList.contains('hidden')) {
    leftContainer.classList.add('hidden');
    rightContainer.style.filter = 'blur(0px) brightness(1)';
    movies.forEach(movie => (movie.style.pointerEvents = 'auto'));
  }
});

crossMenu.addEventListener('click', () => {
  leftContainer.classList.toggle('hidden');
  rightContainer.style.filter = 'blur(0px) brightness(1)';
  movies.forEach(movie => (movie.style.pointerEvents = 'auto'));
});

// on pressing the escape key, the left container is hidden
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !leftContainer.classList.contains('hidden')) {
    leftContainer.classList.add('hidden');
    rightContainer.style.filter = 'blur(0px) brightness(1)';
    movies.forEach(movie => (movie.style.pointerEvents = 'auto'));
  }
});

// When the width of the screen is less than 768px, the left container is hidden

if (window.innerWidth <= 960) {
  leftContainer.classList.add('hidden');
  rightContainer.classList.add('margin-left');
  rightContainer.style.filter = 'blur(0px)';

  headerLogo.addEventListener('click', () => {
    rightContainer.style.filter = 'blur(5px)';
  });
}

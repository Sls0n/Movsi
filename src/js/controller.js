import icons from 'url:../img/sprite.svg';
import image from 'url:../img/sample.jpg';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const container = document.querySelector('.container');
const header = document.querySelector('.header');
const headerLogo = document.querySelector('.header__logo');
const main = document.querySelector('.main');
const leftContainer = document.querySelector('.main__left');
const rightContainer = document.querySelector('.main__right');
const movies = document.querySelectorAll('.movie');
const mainMenu = document.querySelector('.mainMenu');
const crossMenu = document.querySelector('.crossMenu');

headerLogo.addEventListener('click', () => {
  leftContainer.classList.toggle('hidden');
  rightContainer.classList.toggle('margin-left');

  if (crossMenu.classList.contains('hidden')) {
    crossMenu.classList.remove('hidden');
    mainMenu.classList.add('hidden');
  } else {
    crossMenu.classList.add('hidden');
    mainMenu.classList.remove('hidden');
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

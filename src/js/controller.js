import icons from 'url:../img/sprite.svg';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const container = document.querySelector('.container');
const header = document.querySelector('.header');
const searchModal = document.querySelector('.search');
const headerLogo = document.querySelector('.mainMenu');
const navigation = document.querySelector('.header__navigation');
const main = document.querySelector('.main');
const leftContainer = document.querySelector('.main__left');
const rightContainer = document.querySelector('.main__right');
const movies = document.querySelectorAll('.movie');
const mainMenu = document.querySelector('.mainMenu');
const searchIcon = document.querySelector('.icon--search');
const searchIcon_2 = document.querySelector('.icon--search-2');
const crossMenu = document.querySelector('.icon--main');
const crossMenu_2 = document.querySelector('.icon--x-2');

searchIcon.addEventListener('click', () => {
  searchModal.classList.remove('search-hidden');
  searchModal.closest('.search__wrapper').classList.remove('search-hidden-2');
  rightContainer.style.filter = 'blur(10px) brightness(0.5)';
  movies.forEach(movie => (movie.style.pointerEvents = 'none'));
  header.style.filter = 'blur(10px)';
  navigation.style.pointerEvents = 'none';
});

crossMenu_2.addEventListener('click', () => {
  searchModal.classList.add('search-hidden');
  searchModal.closest('.search__wrapper').classList.add('search-hidden-2');
  rightContainer.style.filter = 'blur(0px) brightness(1)';
  movies.forEach(movie => (movie.style.pointerEvents = 'auto'));
  header.style.filter = 'blur(0px)';
  navigation.style.pointerEvents = 'auto';
});

searchIcon_2.addEventListener('click', () => {
  searchModal.classList.add('search-hidden');
  searchModal.closest('.search__wrapper').classList.add('search-hidden-2');
  rightContainer.style.filter = 'blur(0px) brightness(1)';
  movies.forEach(movie => (movie.style.pointerEvents = 'auto'));
  header.style.filter = 'blur(0px)';
  navigation.style.pointerEvents = 'auto';
});

document.addEventListener('keydown', e => {
  if ((e.key === 'Escape' || e.key === 'Enter') && !searchModal.classList.contains('search-hidden')) {
    searchModal.classList.add('search-hidden');
    searchModal.closest('.search__wrapper').classList.add('search-hidden-2');
    rightContainer.style.filter = 'blur(0px) brightness(1)';
    movies.forEach(movie => (movie.style.pointerEvents = 'auto'));
    header.style.filter = 'blur(0px)';
    navigation.style.pointerEvents = 'auto';
  }
});

// If the user clicks anywhere outside of the search modal, it will close
window.addEventListener('click', e => {
  if (e.target === searchModal) {
    searchModal.classList.add('search-hidden');
    searchModal.closest('.search__wrapper').classList.add('search-hidden-2');
    rightContainer.style.filter = 'blur(0px) brightness(1)';
    movies.forEach(movie => (movie.style.pointerEvents = 'auto'));
    header.style.filter = 'blur(0px)';
    navigation.style.pointerEvents = 'auto';
  }
});

headerLogo.addEventListener('click', () => {
  leftContainer.classList.toggle('hidden');
  rightContainer.style.filter = 'blur(5px) brightness(0.8)';
  movies.forEach(movie => (movie.style.pointerEvents = 'none'));
  header.style.filter = 'blur(5px)';
  navigation.style.pointerEvents = 'none';
});

rightContainer.addEventListener('click', () => {
  if (!leftContainer.classList.contains('hidden')) {
    leftContainer.classList.add('hidden');
    rightContainer.style.filter = 'blur(0px) brightness(1)';
    movies.forEach(movie => (movie.style.pointerEvents = 'auto'));
    header.style.filter = 'blur(0px)';
    navigation.style.pointerEvents = 'auto';
  }
});

crossMenu.addEventListener('click', () => {
  leftContainer.classList.toggle('hidden');
  rightContainer.style.filter = 'blur(0px) brightness(1)';
  movies.forEach(movie => (movie.style.pointerEvents = 'auto'));
  header.style.filter = 'blur(0px)';
  navigation.style.pointerEvents = 'auto';
});

// on pressing the escape key, the left container is hidden
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !leftContainer.classList.contains('hidden')) {
    leftContainer.classList.add('hidden');
    rightContainer.style.filter = 'blur(0px) brightness(1)';
    movies.forEach(movie => (movie.style.pointerEvents = 'auto'));
    header.style.filter = 'blur(0px)';
    navigation.style.pointerEvents = 'auto';
  }
});

header.addEventListener('click', e => {
  if (leftContainer.classList.contains('hidden')) return;
  if (e.target === headerLogo) return;
  leftContainer.classList.add('hidden');
  rightContainer.style.filter = 'blur(0px) brightness(1)';
  movies.forEach(movie => (movie.style.pointerEvents = 'auto'));
  header.style.filter = 'blur(0px)';
  navigation.style.pointerEvents = 'auto';
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

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
const inputSlider = document.querySelector('.main__input');
const sliderValue = document.querySelector('.main__slider--text');
const chevronIcon = document.querySelectorAll('.icon--chevron');
const floatingContainer = document.querySelector('.floating-navbar__container');
const floatingItems = document.querySelectorAll('.floating-navbar__item');


floatingItems.forEach(item => {
  item.addEventListener('click', e => {
    if (e.target.classList.contains('floating-navbar__icon')) {
      floatingItems.forEach(el => el.classList.remove('floating-active'));
      e.target.closest('.floating-navbar__item').classList.add('floating-active');
    }
  });
});

headerLogo.addEventListener('click', () => {
  leftContainer.classList.toggle('hidden');
  rightContainer.style.filter = 'blur(5px) brightness(0.8)';
  movies.forEach(movie => (movie.style.pointerEvents = 'none'));
  header.style.filter = 'blur(5px)';
  navigation.style.pointerEvents = 'none';
  floatingContainer.style.pointerEvents = 'none';
  floatingContainer.style.filter = 'blur(5px)';
});

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

searchIcon.addEventListener('click', () => {
  searchModal.classList.remove('search-hidden');
  searchModal.closest('.search__wrapper').classList.remove('search-hidden-2');
  rightContainer.style.filter = 'blur(10px) brightness(0.5)';
  movies.forEach(movie => (movie.style.pointerEvents = 'none'));
  header.style.filter = 'blur(10px)';
  floatingContainer.style.pointerEvents = 'none';
  floatingContainer.style.filter = 'blur(5px)';
  navigation.style.pointerEvents = 'none';
});

crossMenu_2.addEventListener('click', () => {
  searchModal.classList.add('search-hidden');
  searchModal.closest('.search__wrapper').classList.add('search-hidden-2');
  rightContainer.style.filter = 'blur(0px) brightness(1)';
  movies.forEach(movie => (movie.style.pointerEvents = 'auto'));
  header.style.filter = 'blur(0px)';
  floatingContainer.style.pointerEvents = 'auto';
  floatingContainer.style.filter = 'blur(0px)';
  navigation.style.pointerEvents = 'auto';
});

searchIcon_2.addEventListener('click', () => {
  searchModal.classList.add('search-hidden');
  searchModal.closest('.search__wrapper').classList.add('search-hidden-2');
  rightContainer.style.filter = 'blur(0px) brightness(1)';
  movies.forEach(movie => (movie.style.pointerEvents = 'auto'));
  header.style.filter = 'blur(0px)';
  floatingContainer.style.pointerEvents = 'auto';
  floatingContainer.style.filter = 'blur(0px)';
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
    floatingContainer.style.pointerEvents = 'auto';
    floatingContainer.style.filter = 'blur(0px)';
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
    floatingContainer.style.pointerEvents = 'auto';
    floatingContainer.style.filter = 'blur(0px)';
  }
});

rightContainer.addEventListener('click', () => {
  if (!leftContainer.classList.contains('hidden')) {
    leftContainer.classList.add('hidden');
    rightContainer.style.filter = 'blur(0px) brightness(1)';
    movies.forEach(movie => (movie.style.pointerEvents = 'auto'));
    header.style.filter = 'blur(0px)';
    navigation.style.pointerEvents = 'auto';
    floatingContainer.style.pointerEvents = 'auto';
    floatingContainer.style.filter = 'blur(0px)';
  }
});

crossMenu.addEventListener('click', () => {
  leftContainer.classList.toggle('hidden');
  rightContainer.style.filter = 'blur(0px) brightness(1)';
  movies.forEach(movie => (movie.style.pointerEvents = 'auto'));
  header.style.filter = 'blur(0px)';
  navigation.style.pointerEvents = 'auto';
  floatingContainer.style.pointerEvents = 'auto';
  floatingContainer.style.filter = 'blur(0px)';
});

// on pressing the escape key, the left container is hidden
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !leftContainer.classList.contains('hidden')) {
    leftContainer.classList.add('hidden');
    rightContainer.style.filter = 'blur(0px) brightness(1)';
    movies.forEach(movie => (movie.style.pointerEvents = 'auto'));
    header.style.filter = 'blur(0px)';
    navigation.style.pointerEvents = 'auto';
    floatingContainer.style.pointerEvents = 'auto';
    floatingContainer.style.filter = 'blur(0px)';
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
  floatingContainer.style.pointerEvents = 'auto';
  floatingContainer.style.filter = 'blur(0px)';
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

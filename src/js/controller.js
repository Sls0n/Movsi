const container = document.querySelector('.container');
const header = document.querySelector('.header');
const headerLogo = document.querySelector('.header__logo');
const main = document.querySelector('.main');
const leftContainer = document.querySelector('.main__left');
const rightContainer = document.querySelector('.main__right');

headerLogo.addEventListener('click', () => {
  leftContainer.classList.toggle('hidden');
  rightContainer.classList.toggle('margin-left');
});

// When the width of the screen is less than 768px, the left container is hidden

window.addEventListener('resize', () => {
  if (window.innerWidth <= 960) {
    leftContainer.classList.add('hidden');
    rightContainer.classList.add('margin-left');
  }
});

if (window.innerWidth <= 960) {
  leftContainer.classList.add('hidden');
  rightContainer.classList.add('margin-left');
}



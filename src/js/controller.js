import icons from 'url:../img/sprite.svg';
import image from 'url:../img/sample.jpg';

const container = document.querySelector('.container');
const header = document.querySelector('.header');
const headerLogo = document.querySelector('.header__logo');
const main = document.querySelector('.main');
const leftContainer = document.querySelector('.main__left');
const rightContainer = document.querySelector('.main__right');
const movies = document.querySelectorAll('.movie');

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

movies.forEach(function (movie) {
  movie.addEventListener('mouseover', function () {
    const markup = `
      <img class="movie__image" src="${image}" alt="movie-1" />
      
      <svg class="icon--heart movie__heart">
        <use xlink:href="${icons}#icon-heart"></use>
      </svg>
      
      <svg class="icon--maximize movie__maximize">
        <use xlink:href="${icons}#icon-maximize"></use>
      </svg>
      
      <div class="movie__info">
        <div class="movie__info--title">Prey The way of water</div>
      </div>
      
      <div class="movie__info--rating">
        <svg class="icon icon--title">
          <use xlink:href="${icons}#icon-star"></use>
        </svg>
        7.6
      </div>
`;
    movie.innerHTML = markup;
  });
  // When the mouse leaves the movie, the markup is removed
});

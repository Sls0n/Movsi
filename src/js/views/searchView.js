import View from './View.js';
import sidebarView from './sidebarView.js';
import navigationView from './navigationView.js';
import floatingView from './floatingView.js';
import moviesView from './moviesView.js';
import containerView from './containerView.js';

class SearchView extends View {
  _parentElement = document.querySelector('.search__wrapper');

  _removeSearch(e) {
    
  }
}


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
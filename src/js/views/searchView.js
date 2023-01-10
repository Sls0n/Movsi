import View from './View.js';
import sidebarView from './sidebarView.js';
import navigationView from './navigationView.js';
import floatingView from './floatingView.js';
import moviesView from './moviesView.js';
import containerView from './containerView.js';

class SearchView extends View {
  _parentElement = document.querySelector('.search');
  _crossMenu_2 = document.querySelector('.icon--x-2');
  _searchIcon_2 = document.querySelector('.icon--search-2');

  _removeSearch(e) {
    this._parentElement.classList.add('search-hidden');
    this._parentElement.closest('.search__wrapper').classList.add('search-hidden-2');
    containerView._parentElement.style.filter = 'blur(0px) brightness(1)';
    moviesView._parentElement.forEach(movie => (movie.style.pointerEvents = 'auto'));
    navigationView._parentElement.style.filter = 'blur(0px)';
    navigationView._parentElement.querySelector('.header__navigation').style.pointerEvents = 'auto';
    floatingView._parentElement.style.pointerEvents = 'auto';
    floatingView._parentElement.style.filter = 'blur(0px)';
  }

  init() {
    this._crossMenu_2.addEventListener('click', this._removeSearch.bind(this));
    this._searchIcon_2.addEventListener('click', this._removeSearch.bind(this));
  }
}

export default new SearchView();

import View from './View.js';
import icons from 'url:../../img/sprite.svg';

import navigationView from './navigationView.js';
import floatingView from './floatingView.js';
import moviesView from './moviesView.js';
import containerView from './containerView.js';
import showbtnView from './showbtnView.js';

class SearchView extends View {
  _parentElement = document.querySelector('.search');
  _crossMenu_2 = document.querySelector('.icon--x-2');
  _searchIcon_2 = document.querySelector('.icon--search-2');
  _searchInput = document.querySelector('.search__input');

  _data;

  _removeSearch(e) {
    this._parentElement.classList.add('search-hidden');
    this._parentElement.closest('.search__wrapper').classList.add('search-hidden-2');
    containerView._parentElement.style.filter = 'blur(0px) brightness(1)';
    moviesView._parentElement.forEach(movie => (movie.style.pointerEvents = 'auto'));
    navigationView._parentElement.style.filter = 'blur(0px)';
    navigationView._parentElement.querySelector('.header__navigation').style.pointerEvents = 'auto';
    floatingView._parentElement.style.pointerEvents = 'auto';
    floatingView._parentElement.style.filter = 'blur(0px)';
    document.querySelector('footer').style.filter = 'blur(0px)';
  }

  addHandlerSearch(handler) {
    this._searchInput.addEventListener('keydown', e => {
      if (this._searchInput.value === '') return;
      if (e.key === 'Enter') {
        let query = this._searchInput.value;
        this.changeHeader('Search Results', `${query}`);
        showbtnView.hideBtn();
        this.removeActiveNav();
        this._searchInput.value = '';
        handler(1, query);
      }
    });

    this._searchIcon_2.addEventListener('click', e => {
      if (this._searchInput.value === '') return;
      let query = this._searchInput.value;
      this.changeHeader('Search Results', `${query}`);
      showbtnView.hideBtn();
      this.removeActiveNav();
      this._searchInput.value = '';
      handler(1, query);
    });
  }

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
  }

  changeHeader(header, subheader) {
    document.querySelector('.main__trending--header').innerHTML = this._markupHeader(header, subheader);
  }

  removeActiveNav() {
    navigationView._links.forEach(link => link.classList.remove('active'));
    navigationView._iconLinks.forEach(icon => icon.classList.remove('active'));
  }

  _generateMarkup() {
    return `
    <div class="movie">
      <img class="movie__image" src="${this._data.posterPath}" alt="Title">

      <div class="movie__info">
        <div class="movie__info--rating">
          <svg class="icon icon--title">
            <use xlink:href="${icons}#icon-star"></use>
          </svg>
          ${this._data.voteAverage}
        </div>
        <svg class="icon--heart movie__heart">
          <use xlink:href="${icons}#icon-heart"></use>
        </svg>

        <svg class="icon--maximize movie__maximize">
          <use xlink:href="${icons}#icon-maximize"></use>
        </svg>
        <div class="movie__info--title">Title</div>
      </div>
    </div>
  `;
  }

  init() {
    this._crossMenu_2.addEventListener('click', this._removeSearch.bind(this));
    this._searchIcon_2.addEventListener('click', this._removeSearch.bind(this));
  }
}

export default new SearchView();

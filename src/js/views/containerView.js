import icons from 'url:../../img/sprite.svg';
import View from './View.js';
import sidebarView from './sidebarView.js';
import navigationView from './navigationView.js';
import floatingView from './floatingView.js';
import moviesView from './moviesView.js';

class ContainerView extends View {
  _parentElement = document.querySelector('.main__right');
  _childElement = document.querySelector('.movies');
  _data;

  renderSpinner() {
    document.querySelector('.spinner').classList.remove('spinner-hidden');
  }

  removeSpinner() {
    document.querySelector('.spinner').classList.add('spinner-hidden');
  }

  clear() {
    this._parentElement.querySelector('.movies').innerHTML += '';
  }

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this.clear();
    this._parentElement.querySelector('.movies').insertAdjacentHTML('beforeend', markup);
  }

  _generateMarkup() {
    return `
    <div class="movie">
      <img class="movie__image" src="${this._data.posterPath}" alt="${this._data.title}">

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
        <div class="movie__info--title">${this._data.title}</div>
      </div>
    </div>
  `;
  }

  // _removeSidebar(e) {
  //   if (!sidebarView._parentElement.classList.contains('hidden')) {
  //     sidebarView._parentElement.classList.toggle('hidden');
  //     this._parentElement.style.filter = 'blur(0px) brightness(1)';
  //     moviesView._parentElement.forEach(movie => (movie.style.pointerEvents = 'auto'));
  //     navigationView._parentElement.style.filter = 'blur(0px)';
  //     navigationView._parentElement.querySelector('.header__navigation').style.pointerEvents = 'auto';
  //     floatingView._parentElement.style.pointerEvents = 'auto';
  //     floatingView._parentElement.style.filter = 'blur(0px)';
  //   }
  // }

  // init() {
  //   // this._parentElement.addEventListener('click', this._removeSidebar.bind(this));
  // }
}

export default new ContainerView();

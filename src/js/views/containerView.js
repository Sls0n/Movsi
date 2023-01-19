import icons from 'url:../../img/sprite.svg';
import View from './View.js';

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
        <div class="bookmark-svg movie__heart" id="${this._data.id}">
          <svg class="icon--heart book">
            <use xlink:href="${icons}#icon-bookmark"></use>
          </svg>
          <svg class="icon--heart trash display-none">
            <use xlink:href="${icons}#icon-trash"></use>
          </svg>
        </div>
        
        <div class="movie__info--title">${this._data.title}</div>
      </div>
    </div>
  `;
  }
}
//<svg class="icon--maximize movie__maximize">
{
  /* <use xlink:href="${icons}#icon-bookmark"></use> */
}
// </svg>

export default new ContainerView();

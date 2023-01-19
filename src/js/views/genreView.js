import View from './View.js';

class GenreView extends View {
  _parentElement = document.querySelectorAll('.main__button');
  _container = document.querySelectorAll('.main__buttons');

  resetGenre() {
    this._parentElement.forEach(button => {
      button.classList.remove('active-genre');
    });
  }

  disableGenre() {
    this._parentElement.forEach(el => (el.style.pointerEvents = 'none'));
    this._container.forEach(el => (el.style.opacity = '0.3'));
    this.updateGenreHeader('Not available here yet', '⚠');
  }

  enableGenre() {
    this._parentElement.forEach(el => (el.style.pointerEvents = 'auto'));
    this._container.forEach(el => (el.style.opacity = '1'));
    this.updateGenreHeader('Sort by', 'Genre');
  }

  addHandlerGenre(handler) {
    this._parentElement.forEach(btn =>
      btn.addEventListener('click', e => {
        e.preventDefault();
        handler(e);
      })
    );
  }

  toggleActiveGenre(e) {
    e.target.classList.toggle('active-genre');
  }
}

export default new GenreView();

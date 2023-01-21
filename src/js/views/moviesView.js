import View from './View.js';
import bookmarkView from './bookmarkView.js';

class MoviesView extends View {
  _parentElement = document.querySelectorAll('.movies');
  _parentElCopy = document.querySelector('.movies');

  clearMovies() {
    this._parentElCopy.innerHTML = '';
  }

  
}

export default new MoviesView();

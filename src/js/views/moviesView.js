import View from './View.js';

class MoviesView extends View {
  _parentElement = document.querySelectorAll('.movies');
}

export default new MoviesView();

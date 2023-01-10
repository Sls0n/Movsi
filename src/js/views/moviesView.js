import View from './View.js';

class MoviesView extends View {
  _parentElement = document.querySelectorAll('.movie');
}

export default new MoviesView();

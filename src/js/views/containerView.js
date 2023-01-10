import View from './View.js';
import sidebarView from './sidebarView.js';
import navigationView from './navigationView.js';
import floatingView from './floatingView.js';
import moviesView from './moviesView.js';

class ContainerView extends View {
  _parentElement = document.querySelector('.main__right');

  _removeSidebar(e) {
    if (!sidebarView._parentElement.classList.contains('hidden')) {
      sidebarView._parentElement.classList.add('hidden');
      this._parentElement.style.filter = 'blur(0px) brightness(1)';
      moviesView._parentElement.forEach(movie => (movie.style.pointerEvents = 'auto'));
      navigationView._parentElement.style.filter = 'blur(0px)';
      navigationView._parentElement.querySelector('.header__navigation').style.pointerEvents = 'auto';
      floatingView._parentElement.style.pointerEvents = 'auto';
      floatingView._parentElement.style.filter = 'blur(0px)';
    }
  }

  init() {
    this._parentElement.addEventListener('click', this._removeSidebar.bind(this));
  }
}

export default new ContainerView();

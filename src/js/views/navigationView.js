import View from './View.js';
import sidebarView from './sidebarView.js';
import containerView from './containerView.js';
import floatingView from './floatingView.js';
import moviesView from './moviesView.js';

class NavigationView extends View {
  _parentElement = document.querySelector('.header');
  _headerLogo = document.querySelector('.mainMenu');
  _searchIcon = document.querySelector('.icon--search');
  _searchModal = document.querySelector('.search');

  _toggleSidebar() {
    this._parentElement.style.filter = 'blur(5px)';
    this._parentElement.querySelector('.header__navigation').style.pointerEvents = 'none';
    floatingView._parentElement.style.pointerEvents = 'none';
    floatingView._parentElement.style.filter = 'blur(5px)';
    sidebarView._parentElement.classList.toggle('hidden');
    containerView._parentElement.style.filter = 'blur(5px) brightness(0.8)';
    moviesView._parentElement.forEach(movie => (movie.style.pointerEvents = 'none'));
  }

  _removeSidebar(e) {

 
    if (sidebarView._parentElement.classList.contains('hidden')) return;
    if (e.target === this._headerLogo) return;
    sidebarView._parentElement.classList.toggle('hidden');
    containerView._parentElement.style.filter = 'blur(0px) brightness(1)';
    moviesView._parentElement.forEach(movie => (movie.style.pointerEvents = 'auto'));
    this._parentElement.style.filter = 'blur(0px)';
    this._parentElement.querySelector('.header__navigation').style.pointerEvents = 'auto';
    floatingView._parentElement.style.pointerEvents = 'auto';
    floatingView._parentElement.style.filter = 'blur(0px)';
  }

  _toggleSearchModal() {
    this._searchModal.classList.remove('search-hidden');
    this._searchModal.closest('.search__wrapper').classList.remove('search-hidden-2');
    containerView._parentElement.style.filter = 'blur(10px) brightness(0.5)';
    moviesView._parentElement.forEach(movie => (movie.style.pointerEvents = 'none'));
    this._parentElement.style.filter = 'blur(10px)';
    floatingView._parentElement.style.pointerEvents = 'none';
    floatingView._parentElement.style.filter = 'blur(5px)';
    this._parentElement.querySelector('.header__navigation').style.pointerEvents = 'none';
  }

  _removeSearchModal(e) {
    if ((e.key === 'Escape' || e.key === 'Enter' || e.target === this._searchModal) && !this._searchModal.classList.contains('search-hidden')) {
      this._searchModal.classList.add('search-hidden');
      this._searchModal.closest('.search__wrapper').classList.add('search-hidden-2');
      containerView._parentElement.style.filter = 'blur(0px) brightness(1)';
      moviesView._parentElement.forEach(movie => (movie.style.pointerEvents = 'auto'));
      this._parentElement.style.filter = 'blur(0px)';
      this._parentElement.querySelector('.header__navigation').style.pointerEvents = 'auto';
      floatingView._parentElement.style.pointerEvents = 'auto';
      floatingView._parentElement.style.filter = 'blur(0px)';
    }
  }

  init() {
    this._headerLogo.addEventListener('click', this._toggleSidebar.bind(this));
    this._parentElement.addEventListener('click', this._removeSidebar.bind(this));
    this._searchIcon.addEventListener('click', this._toggleSearchModal.bind(this));
    document.addEventListener('keydown', this._removeSearchModal.bind(this));
    window.addEventListener('click', this._removeSearchModal.bind(this));
  }
}

export default new NavigationView();

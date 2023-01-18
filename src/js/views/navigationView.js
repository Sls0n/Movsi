import View from './View.js';
import sidebarView from './sidebarView.js';
import containerView from './containerView.js';
import floatingView from './floatingView.js';
import moviesView from './moviesView.js';
import genreView from './genreView.js';

class NavigationView extends View {
  _parentElement = document.querySelector('.header');
  _headerLogo = document.querySelector('.mainMenu');
  _searchIcon = document.querySelector('.header__search');
  _searchModal = document.querySelector('.search');
  _sort = document.querySelector('.sort');
  _crossIcon = document.querySelector('.icon--main');
  _footer = document.querySelector('footer');
  _links = document.querySelectorAll('.header__link');
  _iconLinks = document.querySelectorAll('.icon--link');

  addHandlerControl(handler) {
    moviesView.clearMovies();
    genreView.resetGenre();
    handler(1);
  }

  removeActiveAll() {
    this._links.forEach(link => link.classList.remove('active'));
    this._iconLinks.forEach(icon => icon.classList.remove('active'));

    // Syncing it with floating navbar
    floatingView._parentElement.querySelectorAll('.floating-navbar__item').forEach(item => {
      item.classList.remove('floating-active');
    });
  }

  addHandlerControlGenre(handler) {
    moviesView.clearMovies();
    handler(1);
  }

  addHandlerSwitch(handler) {
    this._links.forEach(link => link.addEventListener('click', handler));
    document.querySelectorAll('.main__button').forEach(button => button.addEventListener('click', handler));
  }

  _toggleActive(e) {
    const header = document.querySelector('.main__trending--header');
    const mainHeader = header.querySelector('.main__trending--header--text-1');
    const subHeader = header.querySelector('.main__trending--header--text-2');
    if (e.target.classList.contains('ignore-click')) return;
    this._links.forEach(link => link.classList.remove('active'));
    this._iconLinks.forEach(icon => icon.classList.remove('active'));
    e.target.classList.add('active');

    // Syncing it with floating navbar
    floatingView._parentElement.querySelectorAll('.floating-navbar__item').forEach(item => {
      item.classList.remove('floating-active');
    });
    if (e.target.classList.contains('home')) {
      floatingView._parentElement.querySelector('.home').classList.add('floating-active');
      mainHeader.innerHTML = 'Discover movies &nbsp;';
      subHeader.innerHTML = '|&nbsp;&nbsp;  Latest';
    } else if (e.target.classList.contains('trending')) {
      floatingView._parentElement.querySelector('.trending').classList.add('floating-active');
      mainHeader.innerHTML = 'Trending movies &nbsp;';
      subHeader.innerHTML = '|&nbsp;&nbsp;  This week';
    } else if (e.target.classList.contains('toprated')) {
      floatingView._parentElement.querySelector('.toprated').classList.add('floating-active');
      mainHeader.innerHTML = 'Top rated movies &nbsp;';
      subHeader.innerHTML = '|&nbsp;&nbsp;  All time';
    } else if (e.target.classList.contains('tvshows')) {
      floatingView._parentElement.querySelector('.tvshows').classList.add('floating-active');
      mainHeader.innerHTML = 'Discover TV shows &nbsp;';
      subHeader.innerHTML = '|&nbsp;&nbsp;  Popular';
    }

    // If _links is clicked then the svg inside link should also have active class
    if (e.target.classList.contains('header__link')) {
      e.target.querySelector('.icon--link').classList.add('active');
    }
  }

  _toggleSidebar() {
    this._parentElement.style.filter = 'blur(5px)';
    this._parentElement.querySelector('.header__navigation').style.pointerEvents = 'none';
    floatingView._parentElement.style.pointerEvents = 'none';
    floatingView._parentElement.style.filter = 'blur(5px)';
    sidebarView._parentElement.classList.toggle('hidden');
    containerView._parentElement.style.filter = 'blur(5px) brightness(0.8)';
    moviesView._parentElement.forEach(movie => (movie.style.pointerEvents = 'none'));
    this._footer.style.filter = 'blur(5px) brightness(0.8)';
  }

  _sortSidebar() {
    this._toggleSidebar();
  }

  _removeSidebar() {
    sidebarView._parentElement.classList.add('hidden');
    containerView._parentElement.style.filter = 'blur(0px) brightness(1)';
    moviesView._parentElement.forEach(movie => (movie.style.pointerEvents = 'auto'));
    this._parentElement.style.filter = 'blur(0px)';
    this._parentElement.querySelector('.header__navigation').style.pointerEvents = 'auto';
    floatingView._parentElement.style.pointerEvents = 'auto';
    floatingView._parentElement.style.filter = 'blur(0px)';
    this._footer.style.filter = 'blur(0px) brightness(1)';
  }

  _removeSidebarOnClick(e) {
    if (e.target === this._sort) return;
    if (sidebarView._parentElement.classList.contains('hidden')) return;
    if (e.target === this._headerLogo) return;
    this._removeSidebar();
  }

  _removeSidebarOnLogo(e) {
    if (e.target === this._crossIcon) {
      this._removeSidebar();
    }
  }

  _removeSidebarOnEsc(e) {
    if (e.key === 'Escape') {
      this._removeSidebar();
    }
  }

  _toggleSearchModal() {
    document.querySelector('.search__input').focus();
    this._searchModal.classList.remove('search-hidden');
    this._searchModal.closest('.search__wrapper').classList.remove('search-hidden-2');
    containerView._parentElement.style.filter = 'blur(10px) brightness(0.5)';
    moviesView._parentElement.forEach(movie => (movie.style.pointerEvents = 'none'));
    this._parentElement.style.filter = 'blur(10px)';
    floatingView._parentElement.style.pointerEvents = 'none';
    floatingView._parentElement.style.filter = 'blur(5px)';
    this._parentElement.querySelector('.header__navigation').style.pointerEvents = 'none';
    this._footer.style.filter = 'blur(10px) brightness(0.5)';
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
      this._footer.style.filter = 'blur(0px) brightness(1)';
    }
  }

  init() {
    this._sort.addEventListener('click', this._sortSidebar.bind(this));
    this._headerLogo.addEventListener('click', this._toggleSidebar.bind(this));

    this._crossIcon.addEventListener('click', this._removeSidebarOnLogo.bind(this));
    document.addEventListener('keydown', this._removeSidebarOnEsc.bind(this));
    this._parentElement.addEventListener('click', this._removeSidebarOnClick.bind(this));
    containerView._parentElement.addEventListener('click', this._removeSidebarOnClick.bind(this));
    this._footer.addEventListener('click', this._removeSidebarOnClick.bind(this));

    this._searchIcon.addEventListener('click', this._toggleSearchModal.bind(this));
    document.addEventListener('keydown', this._removeSearchModal.bind(this));
    window.addEventListener('click', this._removeSearchModal.bind(this));

    this._links.forEach(link => {
      link.addEventListener('click', this._toggleActive.bind(this));
    });
  }
}

export default new NavigationView();

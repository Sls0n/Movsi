import View from './View.js';
import moviesView from './moviesView.js';

class FloatingView extends View {
  _parentElement = document.querySelector('.floating-navbar__container');

  addHandlerControl(handler) {
    moviesView.clearMovies();
    handler(1);
  }

  addHandlerSwitch(handler) {
    const floatingLinks = this._parentElement.querySelectorAll('.floating-navbar__item');
    floatingLinks.forEach(link => {
      link.addEventListener('click', handler);
    });
  }

  _toggleFloatingActive() {
    const floatingItems = this._parentElement.querySelectorAll('.floating-navbar__item');
    const navItems = document.querySelectorAll('.header__link');
    const navIcons = document.querySelectorAll('.icon--link');
    const header = document.querySelector('.main__trending--header');
    const mainHeader = header.querySelector('.main__trending--header--text-1');
    const subHeader = header.querySelector('.main__trending--header--text-2');

    floatingItems.forEach(item => {
      item.addEventListener('click', e => {
        floatingItems.forEach(el => el.classList.remove('floating-active'));
        e.target.closest('.floating-navbar__item').classList.add('floating-active');

        navItems.forEach(el => el.classList.remove('active'));
        navIcons.forEach(el => el.classList.remove('active'));
        if (e.target.classList.contains('home')) {
          navItems[0].classList.add('active');
          navIcons[0].classList.add('active');
          mainHeader.innerHTML = 'Discover movies &nbsp;';
          subHeader.innerHTML = '|&nbsp;&nbsp;  Latest';
        } else if (e.target.classList.contains('trending')) {
          navItems[1].classList.add('active');
          navIcons[1].classList.add('active');
          mainHeader.innerHTML = 'Trending movies &nbsp;';
          subHeader.innerHTML = '|&nbsp;&nbsp;  This week';
        } else if (e.target.classList.contains('toprated')) {
          navItems[2].classList.add('active');
          navIcons[2].classList.add('active');
          mainHeader.innerHTML = 'Top rated movies &nbsp;';
          subHeader.innerHTML = '|&nbsp;&nbsp;  All time';
        } else if (e.target.classList.contains('tvshows')) {
          navItems[3].classList.add('active');
          navIcons[3].classList.add('active');
          mainHeader.innerHTML = 'Discover TV shows &nbsp;';
          subHeader.innerHTML = '|&nbsp;&nbsp;  Popular';
        }
      });
    });
  }

  init() {
    this._toggleFloatingActive();
  }
}

export default new FloatingView();

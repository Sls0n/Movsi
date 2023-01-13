import View from './View.js';
import containerView from './containerView.js';
import moviesView from './moviesView.js';
import { controlTheatreMovie, controlTrendingMovie, controlTopMovie, controlTvShows } from '../controller.js';

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
    floatingItems.forEach(item => {
      item.addEventListener('click', e => {
        floatingItems.forEach(el => el.classList.remove('floating-active'));
        e.target.closest('.floating-navbar__item').classList.add('floating-active');
      });
    });
  }

  init() {
    this._toggleFloatingActive();
  }
}

export default new FloatingView();
// converting this to MVC
// floatingLinks.forEach(link => {
//   link.addEventListener('click', function (e) {
//     if (e.target.classList.contains('home')) {
//       containerView._parentElement.querySelector('.movies').innerHTML = '';
//       controlTheatreMovie(1);
//       currentNav = 'home';
//     } else if (e.target.classList.contains('trending')) {
//       containerView._parentElement.querySelector('.movies').innerHTML = '';
//       controlTrendingMovie(1);
//       currentNav = 'trending';
//     } else if (e.target.classList.contains('toprated')) {
//       containerView._parentElement.querySelector('.movies').innerHTML = '';
//       controlTopMovie(1);
//       currentNav = 'toprated';
//     } else if (e.target.classList.contains('tvshows')) {
//       containerView._parentElement.querySelector('.movies').innerHTML = '';
//       controlTvShows(1);
//       currentNav = 'tvshows';
//     }
//   });
// });

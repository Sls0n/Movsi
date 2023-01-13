import icons from 'url:../img/sprite.svg';
import * as model from './model.js';

import floatingView from './views/floatingView.js';
import navigationView from './views/navigationView.js';
import sidebarView from './views/sidebarView.js';
import containerView from './views/containerView.js';
import searchView from './views/searchView.js';
import showbtnView from './views/showbtnView.js';
import moviesView from './views/moviesView.js';
import { async } from 'regenerator-runtime';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const links = document.querySelectorAll('.header__link');
const floatingLinks = document.querySelectorAll('.floating-navbar__item');

let currentNav = 'home';

floatingLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    if (e.target.classList.contains('home')) {
      containerView._parentElement.querySelector('.movies').innerHTML = '';
      controlTheatreMovie(1);
      currentNav = 'home';
    } else if (e.target.classList.contains('trending')) {
      containerView._parentElement.querySelector('.movies').innerHTML = '';
      controlTrendingMovie(1);
      currentNav = 'trending';
    } else if (e.target.classList.contains('toprated')) {
      containerView._parentElement.querySelector('.movies').innerHTML = '';
      controlTopMovie(1);
      currentNav = 'toprated';
    } else if (e.target.classList.contains('tvshows')) {
      containerView._parentElement.querySelector('.movies').innerHTML = '';
      controlTvShows(1);
      currentNav = 'tvshows';
    }
  });
});

links.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.classList.contains('home')) {
      containerView._parentElement.querySelector('.movies').innerHTML = '';
      controlTheatreMovie(1);
      currentNav = 'home';
    } else if (e.target.classList.contains('trending')) {
      containerView._parentElement.querySelector('.movies').innerHTML = '';
      controlTrendingMovie(1);
      currentNav = 'trending';
    } else if (e.target.classList.contains('toprated')) {
      containerView._parentElement.querySelector('.movies').innerHTML = '';
      controlTopMovie(1);
      currentNav = 'toprated';
    } else if (e.target.classList.contains('tvshows')) {
      containerView._parentElement.querySelector('.movies').innerHTML = '';
      controlTvShows(1);
      currentNav = 'tvshows';
    }
  });
});

const controlTheatreMovie = async function (page) {
  containerView.renderSpinner();
  await model.loadTheatreMovies(page);

  model.state.resultArray.results.forEach(result => {
    let title = result.title;
    // if the title is more then 45 characters, cut it off and add `...'
    if (title.length > 40) {
      title = title.slice(0, 40) + '...';
    }

    containerView.render(result);
  });
  containerView.removeSpinner();
};

controlTheatreMovie();

const controlTrendingMovie = async function (page) {
  containerView.renderSpinner();
  await model.loadTrendingMovies(page);

  model.state.resultArray.results.forEach(result => {
    let title = result.title;
    // if the title is more then 45 characters, cut it off and add `...'
    if (title.length > 40) {
      title = title.slice(0, 40) + '...';
    }

    containerView.render({ ...result, title });
  });
  containerView.removeSpinner();
};

const controlTopMovie = async function (page) {
  containerView.renderSpinner();
  await model.loadTopMovies(page);

  model.state.resultArray.results.forEach(result => {
    let title = result.title;
    // if the title is more then 45 characters, cut it off and add `...'
    if (title.length > 40) {
      title = title.slice(0, 40) + '...';
    }

    containerView.render({ ...result, title });
  });
  containerView.removeSpinner();
};

const currentNavPage = function (page) {
  switch (currentNav) {
    case 'home':
      controlTheatreMovie(page);
      break;
    case 'trending':
      controlTrendingMovie(page);
      break;
    case 'toprated':
      controlTopMovie(page);
      break;
    case 'tvshows':
      controlTvShows(page);
      break;
  }
};

const init = function () {
  floatingView.init();
  navigationView.init();
  sidebarView.init();
  searchView.init();
  showbtnView.addHandlerPage(currentNavPage);
};

init();

model.loadTvMovies(1);

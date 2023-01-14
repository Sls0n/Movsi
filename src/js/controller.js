import icons from 'url:../img/sprite.svg';
import * as model from './model.js';

import floatingView from './views/floatingView.js';
import navigationView from './views/navigationView.js';
import sidebarView from './views/sidebarView.js';
import containerView from './views/containerView.js';
import searchView from './views/searchView.js';
import showbtnView from './views/showbtnView.js';
import moviesView from './views/moviesView.js';

const searchInput = document.querySelector('.search__input');
const searchIcon = document.querySelector('.icon--search-2');

let query = '';

searchInput.addEventListener('keydown', function (e) {
  if (searchInput.value === '') return;
  if (e.key === 'Enter') {
    query = searchInput.value;
    console.log(query);
    searchInput.value = '';
    model.loadSearchResults(1, query);
    // console.log(model.state.searchResults);
  }
});

searchIcon.addEventListener('click', function (e) {
  if (searchInput.value === '') return;
  query = searchInput.value;
  console.log(query);

  searchInput.value = '';
});

export let currentNav = 'home';

export const controlTheatreMovie = async function (page) {
  containerView.renderSpinner();
  await model.loadTheatreMovies(page);

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

controlTheatreMovie();

export const controlTrendingMovie = async function (page) {
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

export const controlTopMovie = async function (page) {
  containerView.renderSpinner();
  await model.loadTopMovies(page);

  model.state.resultArray.results.forEach(result => {
    let title = result.title;
    // if the title is more then 45 characters, cut it off and add `...'
    if (title.length > 45) {
      title = title.slice(0, 45) + '...';
    }

    containerView.render({ ...result, title });
  });
  containerView.removeSpinner();
};

export const controlTvShows = async function (page) {
  containerView.renderSpinner();
  await model.loadTvShows(page);

  model.state.resultArray.results.forEach(result => {
    let title = result.name;
    // if the title is more then 45 characters, cut it off and add `...'
    if (title.length > 40) {
      title = title.slice(0, 40) + '...';
    }

    containerView.render({ ...result, title });
  });
  containerView.removeSpinner();
};

const floatingNavSwitch = function (e) {
  if (e.target.classList.contains('home')) {
    floatingView.addHandlerControl(controlTheatreMovie);
    currentNav = 'home';
  } else if (e.target.classList.contains('trending')) {
    floatingView.addHandlerControl(controlTrendingMovie);
    currentNav = 'trending';
  } else if (e.target.classList.contains('toprated')) {
    floatingView.addHandlerControl(controlTopMovie);
    currentNav = 'toprated';
  } else if (e.target.classList.contains('tvshows')) {
    floatingView.addHandlerControl(controlTvShows);
    currentNav = 'tvshows';
  }
};

const navSwitch = function (e) {
  if (e.target.classList.contains('home')) {
    navigationView.addHandlerControl(controlTheatreMovie);
    currentNav = 'home';
  } else if (e.target.classList.contains('trending')) {
    navigationView.addHandlerControl(controlTrendingMovie);
    currentNav = 'trending';
  } else if (e.target.classList.contains('toprated')) {
    navigationView.addHandlerControl(controlTopMovie);
    currentNav = 'toprated';
  } else if (e.target.classList.contains('tvshows')) {
    navigationView.addHandlerControl(controlTvShows);
    currentNav = 'tvshows';
  }
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
  navigationView.addHandlerSwitch(navSwitch);
  floatingView.addHandlerSwitch(floatingNavSwitch);
};

init();

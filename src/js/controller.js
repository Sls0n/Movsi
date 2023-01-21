import * as model from './model.js';

import floatingView from './views/floatingView.js';
import navigationView from './views/navigationView.js';
import sidebarView from './views/sidebarView.js';
import containerView from './views/containerView.js';
import searchView from './views/searchView.js';
import showbtnView from './views/showbtnView.js';
import moviesView from './views/moviesView.js';
import genreView from './views/genreView.js';
import bookmarkView from './views/bookmarkView.js';
import { INVALID_IMAGE_PATH } from './config.js';

let currentNav = 'home';

let selectedGenres = [];
let genreName = [];

export const controlGenreMovies = async function (page, genre) {
  showbtnView.showBtn();

  containerView.renderSpinner();

  await model.loadGenreTop(page, genre);

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

const controlActiveGenre = function (e) {
  const genreID = Number(e.target.dataset.id);

  if (!e.target.classList.contains('active-genre') && !e.target.classList.contains('tv')) {
    currentNav = 'genre';
    selectedGenres.push(genreID);
    navigationView.removeActiveAll();
    genreName.push(e.target.dataset.genre);
  } else if (e.target.classList.contains('active-genre') && !e.target.classList.contains('tv')) {
    moviesView.clearMovies();
    selectedGenres = selectedGenres.filter(val => val !== genreID);
    genreName = genreName.filter(val => val !== e.target.dataset.genre);
  }

  genreView.toggleActiveGenre(e);
  genreView.updateHeader('Selected genres', genreName.join(', '));

  if (selectedGenres.length > 0) {
    controlGenreMovies(1, selectedGenres);
  } else {
    currentNav = 'home';
    navigationView.addHandlerControl(controlTheatreMovie);
  }
};

export const controlTheatreMovie = async function (page) {
  showbtnView.showBtn();

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

export const controlGrossMovie = async function (page) {
  showbtnView.showBtn();

  containerView.renderSpinner();
  await model.loadGrossMovies(page);

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
  showbtnView.showBtn();

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
  showbtnView.showBtn();

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

export const controlSearchResults = async function (page, query) {
  containerView.renderSpinner();
  await model.loadSearchResults(page, query);
  containerView._childElement.innerHTML = '';

  model.state.searchResults.result.forEach(result => {
    if (result.posterPath === INVALID_IMAGE_PATH) return;

    let title = result.title;
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
    selectedGenres = [];
    genreView.enableGenre();
    genreName = [];
  } else if (e.target.classList.contains('trending')) {
    floatingView.addHandlerControl(controlGrossMovie);
    currentNav = 'trending';
    selectedGenres = [];
    genreView.enableGenre();
    genreName = [];
  } else if (e.target.classList.contains('toprated')) {
    floatingView.addHandlerControl(controlTopMovie);
    currentNav = 'toprated';
    selectedGenres = [];
    genreView.enableGenre();
    genreName = [];
  } else if (e.target.classList.contains('tvshows')) {
    floatingView.addHandlerControl(controlTvShows);
    currentNav = 'tvshows';
    selectedGenres = [];
    genreName = [];
    genreView.disableGenre();
  }
};

const navSwitch = function (e) {
  if (e.target.classList.contains('home')) {
    navigationView.addHandlerControl(controlTheatreMovie);
    currentNav = 'home';
    selectedGenres = [];
    genreView.enableGenre();
    genreName = [];
  } else if (e.target.classList.contains('trending')) {
    navigationView.addHandlerControl(controlGrossMovie);
    currentNav = 'trending';
    selectedGenres = [];
    genreView.enableGenre();
    genreName = [];
  } else if (e.target.classList.contains('toprated')) {
    navigationView.addHandlerControl(controlTopMovie);
    currentNav = 'toprated';
    selectedGenres = [];
    genreView.enableGenre();
    genreName = [];
  } else if (e.target.classList.contains('tvshows')) {
    navigationView.addHandlerControl(controlTvShows);
    currentNav = 'tvshows';
    selectedGenres = [];
    genreName = [];
    genreView.disableGenre();
  } else if (e.target.classList.contains('main__button')) {
    moviesView.clearMovies();
    genreView.enableGenre();
    // controlGenreMovies(1, selectedGenres);
    // currentNav = 'genre';
  }
};

const currentNavPage = function (page) {
  switch (currentNav) {
    case 'home':
      controlTheatreMovie(page);
      break;
    case 'trending':
      controlGrossMovie(page);
      break;
    case 'toprated':
      controlTopMovie(page);
      break;
    case 'tvshows':
      controlTvShows(page);
      break;
    case 'genre':
      controlGenreMovies(page, selectedGenres);
      break;
  }
};

const controlStorageMovie = function (e) {
  if (currentNav === 'tvshows') return;

  let currentMovies = JSON.parse(localStorage.getItem('movies')) || [];
  if (!currentMovies.includes(e.target.id)) {
    currentMovies.push(e.target.id);
    bookmarkView.toggleBookmarkIcon(e.target.querySelector('.book'), e.target.querySelector('.trash'));
  } else {
    currentMovies = currentMovies.filter(m => m !== e.target.id);
    bookmarkView.toggleBookmarkIcon(e.target.querySelector('.trash'), e.target.querySelector('.book'));
  }

  localStorage.setItem('movies', JSON.stringify(currentMovies));
};

const controlStorageShow = function (e) {
  if (currentNav !== 'tvshows') return;

  let currentShows = JSON.parse(localStorage.getItem('shows')) || [];
  if (!currentShows.includes(e.target.id)) {
    currentShows.push(e.target.id);
    bookmarkView.toggleBookmarkIcon(e.target.querySelector('.book'), e.target.querySelector('.trash'));
  } else {
    currentShows = currentShows.filter(s => s !== e.target.id);
    bookmarkView.toggleBookmarkIcon(e.target.querySelector('.trash'), e.target.querySelector('.book'));
  }

  localStorage.setItem('shows', JSON.stringify(currentShows));
};

const controlBookmarkMovie = async function (ids) {
  showbtnView.hideBtn();
  containerView._childElement.innerHTML = '';
  containerView.updateHeader('Bookmarks', 'All');
  genreView.resetGenre();
  genreView.disableGenre();
  navigationView.removeActiveAll();

  containerView.renderSpinner();
  ids.forEach(async id => {
    await model.loadBookmarkMovie(id);
    let result = model.state.bookmarksMovie;
    containerView.render(result);
  });

  containerView.removeSpinner();
};

const controlBookmarkShow = async function (ids) {
  showbtnView.hideBtn();
  containerView._childElement.innerHTML = '';
  containerView.updateHeader('Bookmarks', 'All');
  genreView.resetGenre();
  genreView.disableGenre();
  navigationView.removeActiveAll();

  containerView.renderSpinner();
  ids.forEach(async id => {
    await model.loadBookmarkShow(id);
    let result = model.state.bookmarksShow;
    containerView.render(result);
  });

  containerView.removeSpinner();
};

const controlBookmarkIcon = function (e) {
  let currentMovies = JSON.parse(localStorage.getItem('movies')) || [];
  currentMovies.forEach(movieId => {
    let movie = document.getElementById(movieId);
    if (movie) {
      bookmarkView.toggleBookmarkIcon(movie.querySelector('.book'), movie.querySelector('.trash'));
    }
  });
  let currentShows = JSON.parse(localStorage.getItem('shows')) || [];
  currentShows.forEach(showId => {
    let show = document.getElementById(showId);
    if (show) {
      bookmarkView.toggleBookmarkIcon(show.querySelector('.book'), show.querySelector('.trash'));
    }
  });
};

const controlBookmarkNavigation = function () {
  let currentMovies = JSON.parse(localStorage.getItem('movies')) || [];
  controlBookmarkMovie(currentMovies);
  let currentShows = JSON.parse(localStorage.getItem('shows')) || [];
  controlBookmarkShow(currentShows);
};

const init = function () {
  floatingView.init();
  navigationView.init();
  sidebarView.switchGenre();
  searchView.init();
  showbtnView.addHandlerPage(currentNavPage);
  navigationView.addHandlerSwitch(navSwitch);
  floatingView.addHandlerSwitch(floatingNavSwitch);
  searchView.addHandlerSearch(controlSearchResults);
  genreView.addHandlerGenre(controlActiveGenre);
  bookmarkView.addHandlerStorage(controlStorageMovie);
  bookmarkView.addHandlerStorage(controlStorageShow);
  bookmarkView.addHandlerDOM(controlBookmarkIcon);
  bookmarkView.addHandlerBookmarkNav(controlBookmarkNavigation);
};

init();

import * as model from './model.js';

import floatingView from './views/floatingView.js';
import navigationView from './views/navigationView.js';
import sidebarView from './views/sidebarView.js';
import containerView from './views/containerView.js';
import searchView from './views/searchView.js';
import showbtnView from './views/showbtnView.js';
import moviesView from './views/moviesView.js';
import genreView from './views/genreView.js';
import { INVALID_IMAGE_PATH } from './config.js';

const movie = document.querySelector('.movies');

movie.addEventListener('click', e => {
  if (!e.target.classList.contains('movie__heart')) return;
  let currentMovies = JSON.parse(localStorage.getItem('movies')) || [];
  if (!currentMovies.includes(e.target.id)) {
    currentMovies.push(e.target.id);
    e.target.querySelector('.book').classList.add('display-none');
    e.target.querySelector('.trash').classList.remove('display-none');
  } else {
    currentMovies = currentMovies.filter(m => m !== e.target.id);
    e.target.querySelector('.book').classList.remove('display-none');
    e.target.querySelector('.trash').classList.add('display-none');
  }

  localStorage.setItem('movies', JSON.stringify(currentMovies));
});

window.addEventListener('load', e => {
  console.log('loaded');
  let currentMovies = JSON.parse(localStorage.getItem('movies')) || [];
  console.log(currentMovies);
  setTimeout(() => {
    currentMovies.forEach(movieId => {
      let movie = document.getElementById(movieId);
      if (movie) {
        movie.querySelector('.book').classList.add('display-none');
        movie.querySelector('.trash').classList.remove('display-none');
      }
    });
  }, 1000);
});

window.addEventListener('hashchange', e => {
  console.log('hash changed, yay!');
  let currentMovies = JSON.parse(localStorage.getItem('movies')) || [];
  console.log(currentMovies);
  setTimeout(() => {
    currentMovies.forEach(movieId => {
      let movie = document.getElementById(movieId);
      if (movie) {
        movie.querySelector('.book').classList.add('display-none');
        movie.querySelector('.trash').classList.remove('display-none');
      }
    });
  }, 1000);
});

// setInterval(() => {
//   let currentMovies = JSON.parse(localStorage.getItem('movies')) || [];
//   currentMovies.forEach(movieId => {
//     let movie = document.getElementById(movieId);
//     if (movie) {
//       movie.querySelector('.book').classList.add('display-none');
//       movie.querySelector('.trash').classList.remove('display-none');
//     }
//   });
// }, 5000);

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
  const genreIDTv = Number(e.target.dataset.tv);

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
};

init();

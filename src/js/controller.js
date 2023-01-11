import icons from 'url:../img/sprite.svg';
import * as model from './model.js';
import { IMAGE_PATH } from './config.js';

import floatingView from './views/floatingView.js';
import navigationView from './views/navigationView.js';
import sidebarView from './views/sidebarView.js';
import containerView from './views/containerView.js';
import searchView from './views/searchView.js';
import moviesView from './views/moviesView.js';
import { async } from 'regenerator-runtime';

const controlTheatreMovie = async function (page) {
  await model.loadTheatreMovies(page);

  model.state.resultArray.results.forEach(result => {
    let title = result.title;
    // if the title is more then 45 characters, cut it off and add `...'
    if (title.length > 45) {
      title = title.slice(0, 45) + '...';
    }
    containerView.render(result);
  });
};

controlTheatreMovie();

const init = function () {
  floatingView.init();
  navigationView.init();
  sidebarView.init();
  containerView.init();
  searchView.init();
};

init();

const paginationBtn = document.querySelectorAll('.pagination-btn');

paginationBtn.forEach(btn => {
  btn.addEventListener('click', function (e) {
    if (!e.target.classList.contains('p-btn')) return;
    paginationBtn.forEach(btn => btn.classList.remove('active-pagination'));
    e.target.classList.add('active-pagination');
  });
});

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

const sort = document.querySelector('.sort');
const main = document.querySelector('.main__left');

// when clicked on sort button it should toggle on sidebar


const controlTheatreMovie = async function (page) {
  await model.loadTheatreMovies(page);

  model.state.resultArray.results.forEach(result => {
    let title = result.title;
    // if the title is more then 45 characters, cut it off and add `...'
    if (title.length > 40) {
      title = title.slice(0, 40) + '...';
    }

    containerView.render({ ...result, title });
  });
};

controlTheatreMovie();

const init = function () {
  floatingView.init();
  navigationView.init();
  sidebarView.init();
  // containerView.init();
  searchView.init();
};

init();

const showMoreBtn = document.querySelector('.showMore-btn');
let page = 1;

showMoreBtn.addEventListener('click', function (e) {
  // increase page on each click
  page = page + 1;
  console.log(page);

  controlTheatreMovie(page);
});

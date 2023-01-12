import icons from 'url:../img/sprite.svg';
import * as model from './model.js';
import { IMAGE_PATH } from './config.js';

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
  searchView.init();
  showbtnView.addHandlerPage(controlTheatreMovie);
};

init();

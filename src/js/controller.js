import floatingView from './views/floatingView.js';
import navigationView from './views/navigationView.js';
import sidebarView from './views/sidebarView.js';
import containerView from './views/containerView.js';
import searchView from './views/searchView.js';

const init = function () {
  floatingView.init();
  navigationView.init();
  sidebarView.init();
  containerView.init();
  searchView.init();
};

init();

import floatingView from './views/floatingView.js';
import navigationView from './views/navigationView.js';
import sidebarView from './views/sidebarView.js';
import containerView from './views/containerView.js';
import searchView from './views/searchView.js';
import { API_KEY } from './API_KEY.js';

const getMovie = async function () {
  const response = await fetch(`https://api.themoviedb.org/3/movie/361743?api_key=${API_KEY}`);
  if (!response.ok) throw new Error(`Problem getting movie data (${response.status})`);

  const data = await response.json();
  console.log(data);
};

getMovie();

const init = function () {
  floatingView.init();
  navigationView.init();
  sidebarView.init();
  containerView.init();
  searchView.init();
};

init();

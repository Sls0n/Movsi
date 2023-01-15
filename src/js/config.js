import * as model from './model.js';
import { API_KEY } from './API_KEY';

export const API_LINK_THEATRE = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
export const API_LINK_TOP = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
export const API_LINK_TRENDING = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;
export const API_LINK_TV = ` https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`;
export const API_LINK_SEARCH = `  https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}`;
export const API_LINK_DISCOVER = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`;
export const IMAGE_PATH = `https://image.tmdb.org/t/p/w500`;
export const INVALID_IMAGE_PATH = `https://image.tmdb.org/t/p/w500null`;

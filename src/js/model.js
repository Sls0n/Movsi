import { API_LINK_THEATRE, API_LINK_TRENDING, API_LINK_TOP, API_LINK_TV, IMAGE_PATH, API_LINK_SEARCH } from './config.js';

export const state = {
  search: {},
  result: {},
  resultArray: {
    results: [],
  },
  searchResults: {
    result: [],
  },
};

export const loadTheatreMovies = async function (page) {
  try {
    const response = await fetch(`${API_LINK_THEATRE}&language=en-US&page=${page}`);
    if (!response.ok) throw new Error(`Problem getting movie data (${response.status})`);
    const data = await response.json();
    state.resultArray.results = data.results.map(result => {
      return {
        adult: result.adult,
        backdropPath: result.backdrop_path,
        genreIds: result.genre_ids,
        id: result.id,
        originalLanguage: result.original_language,
        originalTitle: result.original_title,
        overview: result.overview,
        posterPath: `${IMAGE_PATH}/${result.poster_path}`,
        releaseDate: result.release_date,
        title: result.title,
        voteAverage: result.vote_average,
      };
    });
  } catch (err) {
    alert(err);
  }
};

export const loadTrendingMovies = async function (page) {
  try {
    const response = await fetch(`${API_LINK_TRENDING}&language=en-US&page=${page}`);
    if (!response.ok) throw new Error(`Problem getting movie data (${response.status})`);
    const data = await response.json();
    state.resultArray.results = data.results.map(result => {
      return {
        adult: result.adult,
        backdropPath: result.backdrop_path,
        genreIds: result.genre_ids,
        id: result.id,
        originalLanguage: result.original_language,
        originalTitle: result.original_title,
        overview: result.overview,
        posterPath: `${IMAGE_PATH}/${result.poster_path}`,
        releaseDate: result.release_date,
        title: result.title,
        voteAverage: result.vote_average,
      };
    });
  } catch (err) {
    alert(err);
  }
};

export const loadTopMovies = async function (page) {
  try {
    const response = await fetch(`${API_LINK_TOP}&language=en-US&page=${page}`);
    if (!response.ok) throw new Error(`Problem getting movie data (${response.status})`);
    const data = await response.json();
    state.resultArray.results = data.results.map(result => {
      return {
        adult: result.adult,
        backdropPath: result.backdrop_path,
        genreIds: result.genre_ids,
        id: result.id,
        originalLanguage: result.original_language,
        originalTitle: result.original_title,
        overview: result.overview,
        posterPath: `${IMAGE_PATH}/${result.poster_path}`,
        releaseDate: result.release_date,
        title: result.title,
        voteAverage: result.vote_average,
      };
    });
  } catch (err) {
    alert(err);
  }
};

export const loadTvShows = async function (page) {
  try {
    const response = await fetch(`${API_LINK_TV}&language=en-US&page=${page}`);
    if (!response.ok) throw new Error(`Problem getting movie data (${response.status})`);
    const data = await response.json();
    console.log(data.results);
    state.resultArray.results = data.results.map(result => {
      return {
        adult: result.adult,
        backdropPath: result.backdrop_path,
        genreIds: result.genre_ids,
        id: result.id,
        name: result.name,
        originalLanguage: result.original_language,
        originalName: result.original_name,
        overview: result.overview,
        posterPath: `${IMAGE_PATH}${result.poster_path}`,
        releaseDate: result.first_air_date,
        voteAverage: result.vote_average,
      };
    });
  } catch (err) {
    alert(err);
  }
};

export const loadSearchResults = async function (page, query) {
  try {
    const response = await fetch(`${API_LINK_SEARCH}&language=en-US&page=${page}&query=${query}`);
    if (!response.ok) throw new Error(`Problem getting movie data (${response.status})`);
    const data = await response.json();
    state.searchResults.result = data.results
      .filter(result => result.media_type !== 'person')
      .map(result => {
        if (result.media_type === 'tv') {
          return {
            adult: result.adult,
            backdropPath: result.backdrop_path,
            genreIds: result.genre_ids,
            id: result.id,
            title: result.name,
            originalLanguage: result.original_language,
            overview: result.overview,
            posterPath: `${IMAGE_PATH}${result.poster_path}`,
            releaseDate: result.first_air_date,
            voteAverage: result.vote_average,
          };
        } else if (result.media_type === 'movie') {
          return {
            adult: result.adult,
            backdropPath: result.backdrop_path,
            genreIds: result.genre_ids,
            id: result.id,
            title: result.title,
            originalLanguage: result.original_language,
            overview: result.overview,
            posterPath: `${IMAGE_PATH}${result.poster_path}`,
            releaseDate: result.release_date,
            voteAverage: result.vote_average,
          };
        }
      });

    console.log(state.searchResults);
  } catch (err) {
    alert(err);
  }
};

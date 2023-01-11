import { API_LINK_THEATRE, IMAGE_PATH } from './config.js';

export const state = {
  result: {},
  resultArray: {
    results: [],
  },
};

export const loadTheatreMovies = async function () {
  try {
    const response = await fetch(`${API_LINK_THEATRE}&language=en-US&page=1`);
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

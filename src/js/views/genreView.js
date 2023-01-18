import View from './View.js';

class GenreView extends View {
  _parentElement = document.querySelectorAll('.main__button');
  _container = document.querySelector('.main__buttons');

  resetGenre() {
    this._parentElement.forEach(button => {
      button.classList.remove('active-genre');
    });
  }

  disableGenre() {
    this._parentElement.forEach(el => (el.style.pointerEvents = 'none'));
    this._container.style.opacity = '0.4';
    this.updateGenreHeader('Not available on search', '😔');
  }

  enableGenre() {
    this._parentElement.forEach(el => (el.style.pointerEvents = 'auto'));
    this._container.style.opacity = '1';
    this.updateGenreHeader('Sort by', 'Genre');
  }

  addHandlerGenre(handler) {
    this._parentElement.forEach(btn =>
      btn.addEventListener('click', e => {
        e.preventDefault();
        handler(e);
      })
    );
  }

  toggleActiveGenre(e) {
    e.target.classList.toggle('active-genre');
  }

  // addHandlerButton(handler) {
  //   this._parentElement.forEach(button => {
  //     button.removeEventListener('click', this._parentElement);
  //     button.addEventListener('click', function (e) {
  //       e.preventDefault();
  //       let genreID = Number(e.target.dataset.id);
  //       if (!button.classList.contains('active-genre')) {
  //         selectedGenres.push(genreID);
  //         currentNav = 'genre';
  //         navigationView.removeActiveAll();
  //         genreName.push(e.target.dataset.genre);
  //       } else {
  //         moviesView.clearMovies();
  //         selectedGenres = selectedGenres.filter(val => val !== genreID);
  //         genreName = genreName.filter(val => val !== e.target.dataset.genre);
  //       }
  //       button.classList.toggle('active-genre');

  //       navigationView.updateHeader('Selected genres', genreName.join(', '));

  //       if (selectedGenres.length > 0) {
  //         controlGenreMovies(1, selectedGenres);
  //       } else {
  //         currentNav = 'home';
  //         navigationView.addHandlerControl(controlTheatreMovie);
  //       }
  //     });
  //   });
  // }
}

export default new GenreView();

import navigationView from './navigationView.js';
import View from './View.js';

class SidebarView extends View {
  _parentElement = document.querySelector('.main__left');
  _slider = document.querySelector('.main__input');
  _value = document.querySelector('.main__slider--text');
  _genreButtons = document.querySelectorAll('.main__button');

  _updateSlider(e) {
    this._value.textContent = this._slider.value;
  }

  switchGenre() {
    const movieGenre = document.querySelector('.movie-genre');
    const TvGenre = document.querySelector('.tv-genre');
    navigationView._links.forEach(link => {
      link.addEventListener('click', function (e) {
        if (e.target.classList.contains('ignore-click')) return;
        if (e.target.classList.contains('tvshows')) {
          movieGenre.classList.add('display-none');
          TvGenre.classList.remove('display-none');
        } else {
          movieGenre.classList.remove('display-none');
          TvGenre.classList.add('display-none');
        }
      });
    });
  }

  _changeSliderValue(e) {
    if (e.target.classList.contains('up')) {
      this._slider.value--;
      this._value.textContent = this._slider.value;
    } else if (e.target.classList.contains('down')) {
      this._slider.value++;
      this._value.textContent = this._slider.value;
    }
  }

  init() {
    //
    this._slider.addEventListener('input', this._updateSlider.bind(this));
    document.querySelectorAll('.icon--chevron').forEach(chevron => chevron.addEventListener('click', this._changeSliderValue.bind(this)));
  }
}

export default new SidebarView();

import View from './View.js';
import navigationView from './navigationView.js';
import containerView from './containerView.js';
import floatingView from './floatingView.js';
import moviesView from './moviesView.js';

class SidebarView extends View {
  _parentElement = document.querySelector('.main__left');
  _crossMenu = document.querySelector('.icon--main');
  _slider = document.querySelector('.main__input');
  _value = document.querySelector('.main__slider--text');

  _removeSidebar(e) {
    if ((e.key === 'Escape' && !this._parentElement.classList.contains('hidden')) || e.target === this._crossMenu) {
      this._parentElement.classList.add('hidden');
      containerView._parentElement.style.filter = 'blur(0px) brightness(1)';
      moviesView._parentElement.forEach(movie => (movie.style.pointerEvents = 'auto'));
      navigationView._parentElement.style.filter = 'blur(0px)';
      navigationView._parentElement.querySelector('.header__navigation').style.pointerEvents = 'auto';
      floatingView._parentElement.style.pointerEvents = 'auto';
      floatingView._parentElement.style.filter = 'blur(0px)';
    }
  }

  _updateSlider(e) {
    this._value.textContent = this._slider.value;
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
    document.addEventListener('keydown', this._removeSidebar.bind(this));
    this._crossMenu.addEventListener('click', this._removeSidebar.bind(this));
    this._slider.addEventListener('input', this._updateSlider.bind(this));
    document.querySelectorAll('.icon--chevron').forEach(chevron => chevron.addEventListener('click', this._changeSliderValue.bind(this)));
  }
}

export default new SidebarView();

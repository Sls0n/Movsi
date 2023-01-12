import View from './View.js';
import navigationView from './navigationView.js';
import containerView from './containerView.js';
import floatingView from './floatingView.js';
import moviesView from './moviesView.js';

class SidebarView extends View {
  _parentElement = document.querySelector('.main__left');
  _slider = document.querySelector('.main__input');
  _value = document.querySelector('.main__slider--text');

  

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
    // 
    this._slider.addEventListener('input', this._updateSlider.bind(this));
    document.querySelectorAll('.icon--chevron').forEach(chevron => chevron.addEventListener('click', this._changeSliderValue.bind(this)));
  }
}

export default new SidebarView();

import View from './View.js';

class FloatingView extends View {
  _parentElement = document.querySelector('.floating-navbar__container');

  _toggleFloatingActive() {
    const floatingItems = this._parentElement.querySelectorAll('.floating-navbar__item');
    floatingItems.forEach(item => {
      item.addEventListener('click', e => {
        if (e.target.classList.contains('floating-navbar__icon')) {
          floatingItems.forEach(el => el.classList.remove('floating-active'));
          e.target.closest('.floating-navbar__item').classList.add('floating-active');
        }
      });
    });
  }

  init() {
    this._toggleFloatingActive();
  }
}

export default new FloatingView();

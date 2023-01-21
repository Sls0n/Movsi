import View from './View.js';

class BookmarkView extends View {
  _parentElement = document.querySelector('.movies');
  _bookmarkIcon = document.querySelectorAll('.bookmarks');

  toggleBookmarkIcon(add, remove) {
    add.classList.add('display-none');
    remove.classList.remove('display-none');
  }

  addHandlerBookmarkNav(handler) {
    this._bookmarkIcon.forEach(btn => {
      btn.addEventListener('click', handler);
    });
  }

  addHandlerStorage(handler) {
    this._parentElement.addEventListener('click', function (e) {
      if (!e.target.classList.contains('movie__heart')) return;
      handler(e);
    });
  }

  addHandlerDOM(handler) {
    window.addEventListener('DOMNodeInserted', handler);
  }
}

export default new BookmarkView();

class ShowBtnView {
  _parentElement = document.querySelector('.showMore-btn');
  _page = 1;

  hideBtn() {
    this._parentElement.style.display = 'none';
  }

  showBtn() {
    this._parentElement.style.display = 'flex';
  }

  addHandlerPage(handler) {
    this._parentElement.addEventListener(
      'click',
      function () {
        this._page = this._page + 1;
        handler(this._page);
      }.bind(this)
    );
  }
}

export default new ShowBtnView();

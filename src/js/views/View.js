import icons from 'url:../../img/sprite.svg';

export default class View {
  renderError(check = true, message = 'Something went wrong') {
    if (check) {
      const icon = `
      <svg class="icon--error">
        <use xlink:href="${icons}#icon-info"></use>
       </svg>

      `;
      document.querySelector('.error').classList.remove('display-none');
      document.querySelector('.error').innerHTML = message + icon;
    } else {
      document.querySelector('.error').classList.add('display-none');
      document.querySelector('.error').innerHTML = '';
    }
  }

  updateHeader(header, subHeader) {
    const mainHeader = document.querySelector('.main-header');
    const secondaryHeader = document.querySelector('.sub-header');
    mainHeader.innerHTML = `${header} &nbsp;`;
    secondaryHeader.innerHTML = `|&nbsp;&nbsp; ${subHeader}`;
  }

  updateGenreHeader(header, subHeader) {
    const mainHeader = document.querySelector('.genre-header');
    const secondaryHeader = document.querySelector('.genre-subheader');
    mainHeader.innerHTML = `${header} &nbsp;`;
    secondaryHeader.innerHTML = `|&nbsp;&nbsp; ${subHeader}`;
  }
}

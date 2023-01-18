export default class View {
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

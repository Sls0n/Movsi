export default class View {
  _parentElemenet;

  _markupHeader(header, subHeader) {
    return `
    <div class="main__trending--header--text-1 h3">${header} &nbsp;</div>
    <div class="main__trending--header--text-2 h3">| &nbsp;&nbsp;${subHeader}</div>
    `;
  }

  updateHeader(header, subHeader) {
    const mainHeader = document.querySelector('.main-header');
    const secondaryHeader = document.querySelector('.sub-header');
    mainHeader.innerHTML = `${header} &nbsp;`;
    secondaryHeader.innerHTML = `|&nbsp;&nbsp;  ${subHeader}`;
  }
}

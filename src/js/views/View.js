export default class View {
  _markupHeader(header, subHeader) {
    return `
    <div class="main__trending--header--text-1 h3">${header} &nbsp;</div>
    <div class="main__trending--header--text-2 h3">| &nbsp;&nbsp;${subHeader}</div>
    `;
  }
}

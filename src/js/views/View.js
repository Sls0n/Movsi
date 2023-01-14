export default class View {
  _markupHeader(header, subHeader) {
    return `
    <div class="main__trending--header--text-1 h3">${header} &nbsp;</div>
    <div class="main__trending--header--text-2 h3">| &nbsp;&nbsp;${subHeader}</div>
    `;
  }
}

{
  /* <div class="main__trending--header--text-3 sortby-btn h3">
      <div class="sort"> Sort by &nbsp;
        <svg class="icon icon--link">
          <use xlink:href="${icons}#icon-sliders"></use>
        </svg>
      </div>
    </div> */
}

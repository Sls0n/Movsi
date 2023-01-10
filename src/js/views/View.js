export default class View {
  // _blur() is a function that takes 3 arguments: parentElement, blurPx, and brightnessPx. It sets the parent element's filter property to a blur and brightness value.
  _blur(parentElement, blurPx, brightnessPx = 1) {
    parentElement.style.filter = `blur(${blurPx}px) brightness(${brightnessPx})`;
  }

  _setPointerEvents(parentElement, pointerEvents) {
    parentElement.style.pointerEvents = pointerEvents;
  }

  _toggleHidden(parentElement, hiddenClass) {
    parentElement.classList.toggle(hiddenClass);
  }
}

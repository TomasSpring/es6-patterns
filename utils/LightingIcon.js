export default class LightingIcon {
  constructor() {
    this.previousElement = null;
  }

  lightingOn (element) {
    element.classList.add('lighting');
    this.previousElement = element;
  }
  lightingOff () {
    if (this.previousElement) {
      this.previousElement.classList.remove('lighting');
    }
  }
}

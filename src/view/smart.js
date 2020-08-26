import Abstract from './abstract.js';

export default class Smart extends Abstract {
  constructor() {
    super();
    this._data = {};
  }

  updateData(update, justDataUpdating) {
    if (!update) {
      return;
    }

    this._data = Object.assign(
        {},
        this._data,
        update
    );

    if (justDataUpdating) {
      return;
    }

    this.updateElement();
  }

  updateElement() {
    let prevElement = this.getElement();
    const parentElement = prevElement.parentElement;
    this.removeElement();

    const newElement = this.getElement();

    parentElement.replaceChild(newElement, prevElement);
    prevElement = null;
    this.restoreHandlers();
  }
}

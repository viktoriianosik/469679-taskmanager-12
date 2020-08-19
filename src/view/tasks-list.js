import AbstractView from './abstract.js';

const createTasksListTemplate = () => {
  return (
    `<div class="board__tasks"></div>`
  );
};

export default class TasksList extends AbstractView {
  getTemplate() {
    return createTasksListTemplate();
  }
}

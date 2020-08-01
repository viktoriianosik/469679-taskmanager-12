import {createSiteMenuTempalte} from './view/site-menu.js';
import {createFilterTemplate} from './view/filter.js';
import {createBoardTemplate} from './view/board.js';
import {cteateTaskTemplate} from './view/task.js';
import {createTaskEditTemplate} from './view/task-edit.js';
import {createLoadMoreButtonTemplate} from './view/load-more-button.js';

const TASK_COUNT = 3;

const render = (container, position, template) => {
  container.insertAdjacentHTML(position, template);
};

const siteMainElement = document.querySelector(`.main`);
const headerContainer = siteMainElement.querySelector(`.main__control`);

render(headerContainer, `beforeend`, createSiteMenuTempalte());
render(siteMainElement, `beforeend`, createFilterTemplate());
render(siteMainElement, `beforeend`, createBoardTemplate());

const boardElement = siteMainElement.querySelector(`.board`);
const taskListElement = boardElement.querySelector(`.board__tasks`);

render(taskListElement, `beforeend`, createTaskEditTemplate());

for (let i = 0; i < TASK_COUNT; i++) {
  render(taskListElement, `beforeend`, cteateTaskTemplate());
}

render(boardElement, `beforeend`, createLoadMoreButtonTemplate());

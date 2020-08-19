import SiteMenuView from './view/site-menu.js';
import FilterView from './view/filter.js';
import {generateTask} from './mock/task';
import {generateFilter} from './mock/filter.js';
import BoardPresenter from './presenter/board.js';
import {render, RenderPosition} from './utils/render.js';

const TASK_COUNT = 20;

const tasks = new Array(TASK_COUNT).fill().map(generateTask);
const filters = generateFilter(tasks);

const siteMainElement = document.querySelector(`.main`);
const headerContainer = siteMainElement.querySelector(`.main__control`);

const boardPresenter = new BoardPresenter(siteMainElement);
render(headerContainer, new SiteMenuView().getElement(), RenderPosition.BEFOREEND);
render(siteMainElement, new FilterView(filters).getElement(), RenderPosition.BEFOREEND);
boardPresenter.init(tasks);
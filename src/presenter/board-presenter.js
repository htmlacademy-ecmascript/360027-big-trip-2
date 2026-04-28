import SortView from '../view/sort-view.js';
import EventListView from '../view/event-list-view.js';
import EditPointView from '../view/edit-point-view.js';
import PointView from '../view/point-view.js';
import {render} from '../render.js';

const POINTS_COUNT = 3;

export default class BoardPresenter {
  eventListComponent = new EventListView();

  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(new SortView(), this.boardContainer);
    render(this.eventListComponent, this.boardContainer);

    render(new PointView(), this.eventListComponent.getElement());
    render(new EditPointView(), this.eventListComponent.getElement());

    for (let i = 0; i < POINTS_COUNT; i++) {
      render(new PointView(), this.eventListComponent.getElement());
    }
  }
}

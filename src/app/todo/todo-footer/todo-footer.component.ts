import { Component, OnInit } from '@angular/core';
import * as fromFilterActions from '../../filter/filter.actios';
import * as fromTodoActions from '../todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  validFilters: fromFilterActions.validFilters[] = ['todos', 'completados', 'pendientes'];
  currentFilter: fromFilterActions.validFilters;
  pendings: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state => {
      this.currentFilter = state.filter;
      this.getPendings(state.todos);
    });
  }

  changeFilter(filter: fromFilterActions.validFilters) {
    const action = new fromFilterActions.SetFilterAction(filter);
    this.store.dispatch(action);
  }

  getPendings(todos: Todo[]) {
    this.pendings = todos.filter(todo => !todo.completed).length;
  }

  cleanCompleted() {
    const action = new fromTodoActions.CleanCompletedAction();
    this.store.dispatch(action);
  }

}

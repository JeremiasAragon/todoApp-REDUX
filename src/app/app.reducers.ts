import { Todo } from './todo/models/todo.model';
import { ActionReducerMap } from '@ngrx/store';

import * as fromTodo from './todo/todo.reducer';
import * as fromFilter from './filter/filter.reducer';
import * as fromFilterActions from './filter/filter.actios';

export interface AppState {
    todos: Todo[];
    filter: fromFilterActions.validFilters;
}

export const AppReducers: ActionReducerMap<AppState> = {
    todos: fromTodo.todoReducer,
    filter: fromFilter.filterReducer
};

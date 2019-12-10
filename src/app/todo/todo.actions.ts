import { Action } from '@ngrx/store';

export const ADD_TODO = 'Add todo';
export const TOGGLE_TODO = 'Toggle todo';
export const TOGGLE_ALL = 'Toggle all';
export const EDIT_TODO = 'Edit todo';
export const DELETE_TODO = 'Delete todo';
export const CLEAN_COMPLETED = 'Clean completed todos';

export class AddTodoAction implements Action {
    readonly type = ADD_TODO;

    constructor(public text: string) {}
}

export class ToggleTodoAction implements Action {
    readonly type = TOGGLE_TODO;

    constructor(public id: number) {}
}

export class ToggleAllAction implements Action {
    readonly type = TOGGLE_ALL;

    constructor(public completed: boolean) {}
}

export class EditTodoAction implements Action {
    readonly type = EDIT_TODO;

    constructor(public id: number, public text: string) {}
}

export class DeleteTodoAction implements Action {
    readonly type = DELETE_TODO;

    constructor(public id: number) {}
}

export class CleanCompletedAction implements Action {
    readonly type = CLEAN_COMPLETED;

    constructor() {}
}

export type Actions =   AddTodoAction | ToggleTodoAction | EditTodoAction | DeleteTodoAction
                      | ToggleAllAction | CleanCompletedAction;

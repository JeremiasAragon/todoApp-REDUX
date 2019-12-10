import { Action } from '@ngrx/store';

export const SET_FILTER = 'Set filter';

export type validFilters = 'todos'| 'completados'| 'pendientes';

export class SetFilterAction implements Action {
    readonly type = SET_FILTER;

    constructor(public filter: validFilters) {}
}

export type actions = SetFilterAction;

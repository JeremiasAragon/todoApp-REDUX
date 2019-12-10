import * as fromFilter from './filter.actios';


const initialState: fromFilter.validFilters = 'todos';

export function filterReducer(state = initialState, action: fromFilter.actions): fromFilter.validFilters {
    switch (action.type) {
        case fromFilter.SET_FILTER:
           return action.filter;
        default:
            return state;
    }
}

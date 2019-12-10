import * as fromTodoActions from './todo.actions';
import { Todo } from './models/todo.model';

const todo1 = new Todo('Estudiar más Javascript');
const todo2 = new Todo('Terminar App de recetas');

todo2.completed = true;

const initialState: Todo[] = [todo1, todo2];

export function todoReducer(state = initialState, action: fromTodoActions.Actions): Todo[] {

    switch (action.type) {

        case fromTodoActions.ADD_TODO:
            const todo = new Todo(action.text);
            return [ ...state, todo ];

        case fromTodoActions.TOGGLE_TODO:
            return state.map<Todo>(todoEdit => {
                if (todoEdit.id === action.id) {
                    return {
                        ...todoEdit,
                        completed: !todoEdit.completed
                    };
                } else {
                    return todoEdit;
                }
            });

        case fromTodoActions.TOGGLE_ALL:
            return state.map<Todo>(todoToggle => {
                return {
                    ...todoToggle,
                    completed: action.completed
                };
            });

        case fromTodoActions.EDIT_TODO:
            return state.map<Todo>(todoEdit => {
                if (todoEdit.id === action.id) {
                    return {
                        ...todoEdit,
                        text: action.text
                    };
                } else {
                    return todoEdit;
                }
            });

        case fromTodoActions.CLEAN_COMPLETED:
            return state.filter(cleanCompletedTodo => !cleanCompletedTodo.completed);

        case fromTodoActions.DELETE_TODO:
            return state.filter(todoDelete => todoDelete.id !== action.id);

        default:
            return state;
    }
}

import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/models/todo.model';
import { validFilters } from './filter.actios';

@Pipe({
  name: 'filterTodos'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: validFilters): Todo[] {

    switch (filter) {
      case 'completados':
        return todos.filter(todo => todo.completed);
      case 'pendientes':
        return todos.filter(todo => !todo.completed);
      case 'todos':
        return todos;
      default:
        return todos;
    }
  }

}

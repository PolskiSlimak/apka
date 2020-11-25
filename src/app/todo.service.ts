import { Injectable } from '@angular/core';
import { of } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos = [
    "a", "b", "c"
  ];
  private done = [];

  constructor() {}

  getTodos() {
    return of(this.todos);
  }

  getDone() {
    return of(this.done);
  }

  addTodo(todo: string) {
    this.todos.push(todo);
  }

  addDone(done: string) {
    this.done.push(done);
  }

  removeAll() {
    this.todos.splice(0, this.todos.length);
    this.done.splice(0, this.done.length);
  }

  removeItem(item) {
    let todos = this.todos;
    let i = todos.indexOf(item);
    todos.splice(i,1);
  }
}

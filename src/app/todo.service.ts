import { Injectable } from '@angular/core';
import { Todo } from './todo.js';
import { fromEventPattern, of } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos = [];
  private done = [];

  constructor() {}

  getTodos() {
    this.todos = JSON.parse(localStorage.getItem('todos')) ?? [];
    return of(this.todos);
  }

  getDone() {
    this.done = JSON.parse(localStorage.getItem('done')) ?? [];
    return of(this.done);
  }

  addTodo(todo: string) {
    this.todos.push({
      label: todo,
      date: Date.now()
    });
    this.setLocalStorage('todos', this.todos);
  }

  addDone(done: string) {
    this.done.push(done);
    this.setLocalStorage('done', this.done);
  }

  removeAll() {
    this.todos.splice(0, this.todos.length);
    this.done.splice(0, this.done.length);
    this.setLocalStorage('todos', this.todos);
    this.setLocalStorage('done', this.done);
  }

  removeItem(item) {
    let todos = this.todos;
    let i = todos.indexOf(item);
    todos.splice(i,1);
    this.setLocalStorage('todos', this.todos);
  }
  setLocalStorage(listType, list) {
    localStorage.setItem(listType, JSON.stringify(list));
  }
}

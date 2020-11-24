import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos = [];
  done = [];
  onAdd(event) {
    let value = event.value;
    if (value != "")
      this.todos.push(value);
    event.value = '';
  }
  addToDone(item) {
    this.removeItem(item);
    this.done.push(item);
  }
  onClear() {
    this.todos = [];
    this.done = [];
  }
  removeItem(item) {
    let todos = this.todos;
    let i = todos.indexOf(item);
    todos.splice(i,1);
  }
}

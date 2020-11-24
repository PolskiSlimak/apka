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
    value = '';
  }
  addToDone(event) {
    let todos = this.todos;
    let i = todos.indexOf(event);
    todos.splice(i,1);
    this.done.push(event);
  }
  onClear() {
    this.todos = [];
    this.done = [];
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos = [];

  onAdd(event) {
    this.todos.push(event.value);
    event.value = '';
  }
  onClear() {
    this.todos = [];
  }
}

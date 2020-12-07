import { Component } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todos = [];
  done = [];

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todoService.getTodos().subscribe( todos => {
      console.log(todos);
      this.todos = todos;
    });
    this.todoService.getDone().subscribe( done => {
      this.done = done;
    });;
  }

  onAdd(event) {
    let value = event.value;
    if (value != "")
      this.todoService.addTodo(value);
    event.value = "";
  }

  onClear() {
    this.todoService.removeAll();
  }

}

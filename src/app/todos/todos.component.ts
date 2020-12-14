import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  @Input()
  item;
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {}

  addToDone(item) {
    this.removeItem(item);
    this.todoService.addDone(item);
  }

  removeItem(item) {
    this.todoService.removeItem(item);
  }
}

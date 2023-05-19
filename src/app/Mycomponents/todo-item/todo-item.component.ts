import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @Input() i!: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();
task: any;
// today = new Date();

  constructor() { }

  ngOnInit(): void {
  }
  onClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("on click triggered")
  }
  onCheckboxClick(todo: Todo){
      this.todoCheckbox.emit(todo);
      console.log("edcs")
  }

}

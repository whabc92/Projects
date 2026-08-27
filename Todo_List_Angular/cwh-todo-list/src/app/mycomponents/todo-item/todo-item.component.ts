import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Input() i!: number;
  @Output()
  todoDelete : EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output()
  todoCheckbox : EventEmitter<Todo> = new EventEmitter<Todo>();

  deleteFun(todo: Todo){
    console.log("Delete Button Clicked");
    this.todoDelete.emit(todo);
  }

  checkboxFun(todo: Todo){
    console.log("Checkbox Button Cliked");
    this.todoCheckbox.emit(todo);
  }
} 

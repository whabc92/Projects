import { Component } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todos', 
  standalone: true,
  imports: [CommonModule, TodoItemComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  todos:Todo[] = [];

  constructor(){
    this.todos = JSON.parse(localStorage.getItem("todos") || "[]");
  }

  deleteTodo(todo : Todo){
    const idx = this.todos.indexOf(todo)
    this.todos.splice(idx, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addTodo(todo : Todo){
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  checkboxTodo(todo : Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}

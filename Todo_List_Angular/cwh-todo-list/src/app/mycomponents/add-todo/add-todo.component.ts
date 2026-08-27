import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  title: string = "";
  desc: string = "";

  @Output() todoAdd : EventEmitter<Todo> = new EventEmitter<Todo>();
  
  onSubmit(){
    console.log("Add button Clicked");
    console.log(this.title);
    console.log(this.desc);

    if(this.title == ""){
      this.title = "Empty";
    }

    if(this.desc == ""){
      this.desc = "Empty";
    }

    const todo = {
      title : this.title,
      desc : this.desc,
      active : true
    }

    this.todoAdd.emit(todo);

    this.title = "";
    this.desc = "";
  }
}

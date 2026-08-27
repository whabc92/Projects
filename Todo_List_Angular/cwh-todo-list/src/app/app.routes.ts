import { Routes } from '@angular/router';
import { TodosComponent } from './mycomponents/todos/todos.component';
import { AboutComponent } from './mycomponents/about/about.component';

export const routes: Routes = [
    { path: '', component: TodosComponent},
    { path: 'about', component: AboutComponent }
];

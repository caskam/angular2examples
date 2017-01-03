import { Component } from '@angular/core';
import { TodosComponent } from '../todos/todos.component';
@Component({
  selector: 'my-app',
  template: `
    <h1>My Todos</h1>
    <todos></todos>
  `,
})
export class AppComponent  {  }

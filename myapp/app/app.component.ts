import { Component } from '@angular/core';
import { MyComponent } from './my-component.component';

export class Hero{
  id: number;
  name: String;
}

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input bindon-ngModel="hero.name" placeholder="name">
    </div>
    <div>
      <my-component></my-component>
      <!-- <my-component bind-myComponentName="Test"></my-component-->
    </div>
    `
})
export class AppComponent  {
  //name = 'Angular';
  title = 'Tour of Heros';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }
}

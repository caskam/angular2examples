import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { Provider } from '@angular/core';
import { Car } from '../../services/car/car.service';
import { Body } from '../../services/body/body.service';
import { Engine } from '../../services/engine/engine.service';
import { Tires } from '../../services/tires/tires.service';

@Component({
  selector: 'my-app',
  template: `
    <h2 [ngStyle]="{'background-color': color}">Color: {{color}}</h2>

  `,
  providers: [Car, Engine, Tires, Body]
})
export class AppComponent  {
  color: string;

  constructor(@Inject(Car) c: Car){
      this.color = c.body.color;
  }
}

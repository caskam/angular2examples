import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h2>{{name | uppercase}}</h2>
    <h2>{{name | lowercase}}</h2>
    <h2>{{today | date:'dd/MMM/yyyy'}}</h2>
    <h2>{{today | date:'medium'}}</h2>
    <h2>{{today | date:'shortTime'}}</h2>
    <h2>{{today | date:'longDate'}}</h2>
    <h2>Birthday is {{birthday}}</h2>
    <h2>{{num | currency}}</h2>
    <h2>{{num | currency: 'INR':'true'}}</h2>
    <h2>{{num | currency:'GBP':'true'}}</h2>
    <h2>{{promise | async}}</h2>
  `,
})
export class AppComponent  {
  name: string;
  today: Date;
  birthday: Date;
  num: number;
  promise: Promise<void>;

  constructor(){
    this.name = 'Puneet Sachdev';
    this.today = new Date();
    this.birthday = new Date(1975, 2, 6);
    this.num = 5;
    this.promise = new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve('Hey, this is a promise.')
      }, 2000);
    });
  }
}

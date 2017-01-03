import { Component } from '@angular/core';

@Component({
  selector: 'my-component',
  template: `
    <h3>Hello World {{myComponentName}}</h3>
    <img [src] = "imageUrl"/>
    <img bind-src = "imageUrl"/>
    <button [class.isActive] = "isActive">Button - Class Binding</button>
    <button [style.background-color] = "isActive ? 'green':'red'">Button - Style Binding</button>
    <p><button (click) = "changeMessage()">Button3 - Event Binding</button>
    <h3>{{clickMessage}}</h3>
    <input [(ngModel)]="myComponentName" (ngModelChange)="setUpperCase($event)"/>
    `
})

export class MyComponent{
  myComponentName = "Test";
  imageUrl = "";
  isActive = false;
  clickMessage = "";
  constructor(){
    this.myComponentName = "Puneet Sachdev";
    this.imageUrl = "http://lorempixel.com/400/200";
    this.isActive = true;
  }

  changeMessage(){
    this.clickMessage = "The button is clicked";
  }

  setUpperCase(e:string){
    this.myComponentName = e.toUpperCase();
  }
}

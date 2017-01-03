import { Injectable } from '@angular/core';

@Injectable()
export class Body{
  color: string = 'Black';
  constructor(){
    this.color = 'Blue';
  }
}

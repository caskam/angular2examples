import { Injectable } from '@angular/core';
import { Body } from '../body/body.service';
import { Engine } from '../engine/engine.service';
import { Tires } from '../tires/tires.service';

@Injectable()
export class Car{
  constructor(
    public body: Body,
    public engine: Engine,
    public tires: Tires
  ){

  }
}

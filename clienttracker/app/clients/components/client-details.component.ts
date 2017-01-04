import { Component } from '@angular/core';
import { Client } from '../model/client';
import { ClientService } from '../services/client.service';
import { Router, ActivatedRoute } from '@angular/router';
import { OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'client-details',
  template: `
  <div class="w3-row">
    <ul class="w3-ul w3-border">
      <li><h2>{{client.firstName}} {{client.lastName}} <a [routerLink]="['/clients/edit', client.id]" class="w3-btn light-grey  w3-tiny" href="#">Edit</a></h2></li>
      <li>Group: {{client.group}}</li>
      <li>Email: {{client.email}}</li>
      <li>Phone: {{client.phone}}</li>
      <li>Street: {{client.address}}</li>
      <li>City: {{client.city}}</li>
      <li>Zipcode: {{client.zipcode}}</li>
      </ul>
  </div>
  `,
})
export class ClientDetailsComponent implements OnInit, OnDestroy {
  private id: string;
  private client: Client;
  private paramsSubscription: Subscription;

  constructor(
    private _router: Router,
    private _clientService: ClientService,
    private _route: ActivatedRoute
  ){

  }

  ngOnInit(){
      this.paramsSubscription = this._route.params.subscribe(params => {
        this.id = params['id'];
      });
      this.client = this._clientService.getClientDetails(this.id);
  }

  ngOnDestroy(){
    this.paramsSubscription.unsubscribe();
  }
}

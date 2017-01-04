import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Client } from '../model/client';
import { ClientService } from '../services/client.service';
import { OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FilterArrayPipe } from '../pipe/filter.pipe';

@Component({
  selector: 'client-list',
  template: `
    <h2>Clients</h2>
    <form>
      <input type="text" class="w3-input" [(ngModel)]="searchText" [ngModelOptions]="{standalone: true}" placeholder="Search clients...">
    </form>
    <div *ngIf="clients">
    <table *ngIf="clients" class="w3-table w3-bordered w3-striped">
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th></th>
      </tr>
      <tr *ngFor="let client of clients | filter:searchText">
        <td><a [routerLink]="['/clients/details', client.id]">{{client.firstName}} {{client.lastName}}</a></td>
        <td>{{client.email}}</td>
        <td>{{client.phone}}</td>
        <td>
          <a [routerLink]="['/clients/edit', client.id]" class="w3-btn w3-green">Edit</a>
          <button (click)="deleteClient(client.id)" class="w3-btn w3-red">Delete</button>
        </td>
      </tr>
    </table>
    </div>
  `,
})
export class ClientListComponent implements OnInit, OnDestroy {
  private clients: Client[];
  private subscriptionClient: Subscription;
  private searchText: string;
  constructor(
    private _clientService: ClientService,
    private _router: Router
  ){
    this.clients = [];
  }

  ngOnInit(){
    this.subscriptionClient = this._clientService.getClients().subscribe(
      returnedClient => {
        this.clients.push(returnedClient);
      },
      error => {
        this.subscriptionClient.unsubscribe();
      }
    );
  }

  ngOnDestroy(){
      this.subscriptionClient.unsubscribe();
  }

  deleteClient(id: string){
    this.clients.forEach((client, index) => {
      if (client.id == id) {
        this.clients.splice(index, 1);
      }
    });
    this._clientService.deleteClient(id);
  }

}

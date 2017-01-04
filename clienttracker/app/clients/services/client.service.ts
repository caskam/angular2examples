import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

declare var firebase: any;

@Injectable()
export class ClientService{
  clientDb: any;
  group = 'Web Design';
  constructor(){
    this.clientDb = firebase.database().ref('/').child('clients');
  }

  addNewClient(newClient: any): void{
    this.clientDb.push({
      firstName: newClient.firstName,
      lastName: newClient.lastName,
      group: this.group,
      email: newClient.email,
      phone: newClient.phone,
      address: newClient.address,
      city: newClient.city,
      state: newClient.state,
      zipcode: newClient.zipcode
    });
    return;
  }
}

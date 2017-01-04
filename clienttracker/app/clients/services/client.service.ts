import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Client } from '../model/client';
import { Group } from '../../groups/model/group';
import { GroupService } from '../../groups/services/group.service';
declare var firebase: any;

@Injectable()
export class ClientService{
  clientDb: any;

  group = 'Web Design';

  constructor(private _groupService: GroupService){
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

  getClients(): Observable<Client>{
    return Observable.create(observer => {
      let listener = this.clientDb.on('child_added', snapshot => {
        let clientread = new Client(
          snapshot.key,
          snapshot.val().firstName,
          snapshot.val().lastName,
          snapshot.val().group,
          snapshot.val().email,
          snapshot.val().phone,
          snapshot.val().address,
          snapshot.val().city,
          snapshot.val().state,
          snapshot.val().zipcode
        );
        observer.next(clientread);
      });
    });
  }

  getGroups(): Observable<Group>{
    return this._groupService.getGroups();
  }


  getClientDetails(id: String): Client{
    let dbRef = firebase.database().ref("/").child('clients/'+id);
    let clientRead: Client;
    dbRef.on('value', snapshot => {
      clientRead = new Client(
        snapshot.key,
        snapshot.val().firstName,
        snapshot.val().lastName,
        snapshot.val().group,
        snapshot.val().email,
        snapshot.val().phone,
        snapshot.val().address,
        snapshot.val().city,
        snapshot.val().state,
        snapshot.val().zipcode
      );
    });
    return clientRead;
  }

  deleteClient(id: string): void{
    let dbRef = firebase.database().ref('/').child('clients/'+id);
    dbRef.remove();
    console.log('removed');
    return;
  }

  editClient(updatedClient: Client): void{
    let dbRef = firebase.database().ref('/').child('clients/'+updatedClient.id);
    dbRef.update({
      firstName: updatedClient.firstName,
      lstName: updatedClient.lastName,
      group: updatedClient.group,
      email: updatedClient.email,
      phone: updatedClient.phone,
      address: updatedClient.address,
      state: updatedClient.state,
      city: updatedClient.city,
      zipcode: updatedClient.zipcode
    });
    return;
  }

}

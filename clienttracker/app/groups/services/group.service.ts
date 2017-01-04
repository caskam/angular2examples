import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Group } from '../model/group';

declare var firebase: any;

@Injectable()
export class GroupService{
  groupDb: any;

  constructor(){
    this.groupDb = firebase.database().ref('/').child('groups');
  }

  addGroup(newGroup: string): void{
    this.groupDb.push({
      name: newGroup
    });
    return;
  }

  getGroups(): Observable<Group>{
    return Observable.create(observer => {
      let listener = this.groupDb.on('child_added', snapshot => {
        let groupread = new Group(snapshot.key, snapshot.val().name);
        observer.next(groupread);
      });
    });
  }

  getGroup(id: string): Group{
    let dbRef = firebase.database().ref('/').child('groups/'+id);
    let groupRead: Group;
    dbRef.on('value', snapshot => {
      groupRead = new Group(snapshot.key, snapshot.val().name);
    });
    return groupRead;
  }

  deleteGroup(id: string): void{
    let dbRef = firebase.database().ref('/').child('groups/'+id);
    dbRef.remove();
    console.log('removed');
    return;
  }

  editGroup(updatedGroup: Group): void{
    let dbRef = firebase.database().ref('/').child('groups/'+updatedGroup.id);
    dbRef.update({
      name: updatedGroup.name
    });
    return;
  }
}

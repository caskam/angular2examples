import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Group } from '../model/group';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import 'rxjs/add/operator/map';

declare var firebase: any;

@Injectable()
export class GroupService{
  groupDb: any;
  // private _groups: BehaviorSubject<Group[]>;
  // private groups: Group[];

  constructor(){
    this.groupDb = firebase.database().ref('/').child('groups');
    // this.groups = [];
    // this._groups = new BehaviorSubject([]);
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
}

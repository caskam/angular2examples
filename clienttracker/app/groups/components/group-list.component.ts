import { Component } from '@angular/core';
import { Group } from '../model/group';
import { GroupService } from '../services/group.service';
import { Router } from '@angular/router';
import { OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'group-list',
  template: `
    <h2>Group List</h2>
    <div *ngIf="groups">
      <table class="w3-table w3-bordered w3-striped">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th></th>
      </tr>
      <tr *ngFor="let group of groups, let i = index">
        <td>{{group.id}}</td>
        <td>{{group.name}}</td>
        <td>
          <a [routerLink]="['/groups/edit', group.id]" class="w3-btn w3-green">Edit</a>
          <button (click)="deleteGroup(group.id)" class="w3-btn w3-red">Delete</button>
        </td>
      </tr>
      </table>
    </div>
  `,
})

export class GroupListComponent implements OnInit, OnDestroy {
  groups: Group[];
  subscription: Subscription;
  constructor(
    private _groupService: GroupService,
    private _router: Router
  ){
    this.groups = [];
  }

  ngOnInit(){
      this.subscription = this._groupService.getGroups().subscribe(returnedGroup => {
        this.groups.push(returnedGroup);
      });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  deleteGroup(id: string){
    this.groups.forEach((group, index) => {
      if (group.id == id){
        this.groups.splice(index, 1);
      }
    });
    this._groupService.deleteGroup(id);
  }

}

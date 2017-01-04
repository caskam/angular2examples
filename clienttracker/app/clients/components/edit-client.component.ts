import { Component, OnInit, OnDestroy } from '@angular/core';
import { Client } from '../model/client';
import { ClientService } from '../services/client.service';
import { Router, ActivatedRoute } from '@angular/router';
import {
    FormGroup,
    Validators,
    FormControl,
    FormBuilder
} from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Group } from '../../groups/model/group';

@Component({
  selector: 'edit-client',
  template: `
  <div class="w3-card-4">
    <div class="w3-container w3-green">
      <h2>Edit Client</h2>
    </div>
    <form [formGroup]="form" class="w3-padding-16">
      <div class="form-group">
        <label class="w3-label">First Name</label>
        <input class="w3-input" type="text" [(ngModel)]="loadedClient.firstName" formControlName="firstName">
      </div>
      <div class="form-group">
        <label class="w3-label">Last Name</label>
        <input class="w3-input" type="text" [(ngModel)]="loadedClient.lastName" [ngModelOptions]="{standalone: true}">
      </div>
      <div class="form-group">
        <label class="w3-label">Group</label>
        <select class="w3-select" [(ngModel)]="loadedClient.group" [ngModelOptions]="{standalone: true}">
          <option value="" disabled selected>Choose your option</option>
          <option *ngFor="let group of groups" [value]="group.name">{{group.name}}</option>
        </select>
      </div>
      <div class="form-group">
        <label class="w3-label">Email</label>
        <input class="w3-input" type="text" [(ngModel)]="loadedClient.email" formControlName="email">
      </div>
      <div class="form-group">
        <label class="w3-label">Phone</label>
        <input class="w3-input" type="text" [(ngModel)]="loadedClient.phone" [ngModelOptions]="{standalone: true}">
      </div>
      <div class="form-group">
        <label class="w3-label">Address</label>
        <input class="w3-input" type="text" [(ngModel)]="loadedClient.address" [ngModelOptions]="{standalone: true}">
      </div>
      <div class="form-group">
        <label class="w3-label">City</label>
        <input class="w3-input" type="text" [(ngModel)]="loadedClient.city" [ngModelOptions]="{standalone: true}">
      </div>
      <div class="form-group">
        <label class="w3-label">State</label>
        <input class="w3-input" type="text" [(ngModel)]="loadedClient.state" [ngModelOptions]="{standalone: true}">
      </div>
      <div class="form-group">
        <label class="w3-label">Zipcode</label>
        <input class="w3-input" type="text" [(ngModel)]="loadedClient.zipcode" [ngModelOptions]="{standalone: true}">
      </div>
      <div class="form-group">
      <button (click)="editClient(loadedClient.id)" [disabled]="!form.valid" class="w3-btn w3-light-grey">Sumbit data</button>
      </div>
    </form>
  </div>
  `,
})

export class EditClientComponent implements OnInit, OnDestroy {
  form: FormGroup;
  firstName: FormControl
  email: FormControl;
  public loadedClient: any = {};
  groups: Group[];
  paramsSubscription: Subscription;
  groupsSubscription: Subscription;
  id: string;

  constructor(
    private _clientService: ClientService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _fb: FormBuilder
  ){
    this.loadedClient = {};
    this.groups = [];
    this.firstName = new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])
    );
    this.email = new FormControl(
      "",
      Validators.compose([
        Validators.required,
        Validators.pattern(/[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm)
      ])
    );
    this.form = _fb.group({
      "firstName": this.firstName,
      "email": this.email
    });
  }

  ngOnInit(){
    this.paramsSubscription = this._route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.groupsSubscription = this._clientService.getGroups().subscribe(returnedGroup => {
      this.groups.push(returnedGroup);
    });
    this.loadedClient = this._clientService.getClientDetails(this.id);
  }

  ngOnDestroy(){
    this.paramsSubscription.unsubscribe();
    this.groupsSubscription.unsubscribe();
  }

  editClient(){
    this._clientService.editClient(this.loadedClient);
    this.loadedClient = {};
    this._router.navigateByUrl('clients');
  }
}

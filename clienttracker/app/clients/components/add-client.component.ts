import { Component, } from '@angular/core';
import {
    FormGroup,
    FormBuilder,
    Validators,
    FormControl
} from '@angular/forms';
import { Router } from '@angular/router';
import { OnInit, OnDestroy } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Subscription } from 'rxjs/Subscription';
import { Group } from '../../groups/model/group';

@Component({
  selector: 'add-client',
  template: `
  <div class="w3-card-4">
      <div class="w3-container w3-green">
        <h2>Add Client</h2>
      </div>
      <form [formGroup]="form" class="w3-padding-16">
        <div class="form-group">
          <label class="w3-label">First Name</label>
          <input class="w3-input" type="text" [(ngModel)]="newClient.firstName" formControlName="firstName">
        </div>
        <div class="form-group">
          <label class="w3-label">Last Name</label>
          <input class="w3-input" type="text" [(ngModel)]="newClient.lastName" [ngModelOptions]="{standalone: true}">
        </div>
        <div class="form-group">
          <label class="w3-label">Group</label>
          <select class="w3-select" [(ngModel)]="newClient.group" [ngModelOptions]="{standalone: true}">
            <option value="" disabled selected>Choose your option</option>
            <option *ngFor="let group of groups" [value]="group.name">{{group.name}}</option>
          </select>
        </div>
        <div class="form-group">
        <input class="w3-input" type="text" [(ngModel)]="newClient.email" formControlName="email">
          <label class="w3-label">Email</label>
        </div>
        <div class="form-group">
          <label class="w3-label">Phone</label>
          <input class="w3-input" type="text" [(ngModel)]="newClient.phone" [ngModelOptions]="{standalone: true}">
        </div>
        <div class="form-group">
          <label class="w3-label">Address</label>
          <input class="w3-input" type="text" [(ngModel)]="newClient.address" [ngModelOptions]="{standalone: true}">
        </div>
        <div class="form-group">
          <label class="w3-label">City</label>
          <input class="w3-input" type="text" [(ngModel)]="newClient.city" [ngModelOptions]="{standalone: true}">
        </div>
        <div class="form-group">
          <label class="w3-label">State</label>
          <input class="w3-input" type="text" [(ngModel)]="newClient.state" [ngModelOptions]="{standalone: true}">
        </div>
        <div class="form-group">
          <label class="w3-label">Zipcode</label>
          <input class="w3-input" type="text" [(ngModel)]="newClient.zipcode" [ngModelOptions]="{standalone: true}">
        </div>
        <div class="form-group">
        <button (click)="addClient()" [disabled]="!form.valid" class="w3-btn w3-light-grey">Sumbit data</button>
        </div>
      </form>
    </div>
  `,
})
export class AddClientComponent implements OnInit, OnDestroy {
  form: FormGroup;
  firstName: FormControl;
  email: FormControl;
  public newClient: any = {};
  groups: Group[];
  subscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private _clientService: ClientService,
    private _router: Router
  ){
    this.groups = [];
    this.firstName = new FormControl(
      "",
      Validators.compose([
        Validators.required, Validators.minLength(3)
      ])
    );
    this.email = new FormControl(
      "",
      Validators.compose([
        Validators.required,
        Validators.pattern(/[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm)
      ])
    );
    this.form = fb.group({
      "firstName": this.firstName,
      "email": this.email
    });
  }

  addClient(){
    this._clientService.addNewClient(this.newClient);
    this.newClient = {};
    this._router.navigateByUrl('clients');
  }

  ngOnInit(){
    this.subscription = this._clientService.getGroups().subscribe(
      returnedGroup => {
        this.groups.push(returnedGroup);
      }
    );
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}

import { Component } from '@angular/core';
import {
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from '@angular/forms';
import { Router } from '@angular/router';
import { GroupService } from '../services/group.service';

@Component({
  selector: 'add-group',
  template: `
    <div class="w3-card-4">
      <div class="container w3-green">
        <h2>Add Group</h2>
      </div>
      <div>
        <form [formGroup]="form" (ngSubmit)="addNewGroup()" class="w3-padding-16">
          <div class="form-group">
            <label class="w3-label">Group Name</label>
            <input type="text" class="w3-text" [(ngModel)]="groupName" formControlName="name">
          </div>
          <div class="form-group">
            <button [disabled]="!form.valid" type="submit" class="w3-btn w3-light-grey">Submit Data</button>
          </div>
        </form>
      </div>
    </div>
  `,
})

export class AddGroupComponent  {
  form: FormGroup;
  name: FormControl;
  groupName: string;

  constructor(
    private _fb: FormBuilder,
    private _groupService: GroupService,
    private _router: Router
  ){
    this.name = new FormControl(
      "",
      Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])
    );

    this.form = _fb.group({
      "name": this.name
    });
  }

  addNewGroup(){
    console.log(this.groupName);
    this._groupService.addGroup(this.groupName);
    this.groupName = '';
    this._router.navigateByUrl('groups');
  }
}

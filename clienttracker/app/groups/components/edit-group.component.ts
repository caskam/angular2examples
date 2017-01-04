import { Component, OnInit, OnDestroy } from '@angular/core';
import { Group } from '../model/group';
import { GroupService } from '../services/group.service';
import { Router, ActivatedRoute } from '@angular/router';
import {
    FormGroup,
    Validators,
    FormControl,
    FormBuilder
} from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'edit-group',
  template: `
  <div class="w3-card-4">
    <div class="w3-container w3-green">
      <h2>Edit Group</h2>
    </div>
    <form [formGroup]="form" class="w3-padding-16">
      <div class="form-group">
        <label class="w3-label">Group Name</label>
        <input class="w3-input" type="text" [(ngModel)]="loadedGroup.name" formControlName="name">
      </div>
      <div class="form-group">
      <button (click)="editGroup(loadedGroup.id)" [disabled]="!form.valid" class="w3-btn w3-light-grey">Sumbit data</button>
      </div>
    </form>
  </div>
  `,
})
export class EditGroupComponent implements OnInit, OnDestroy {
  form: FormGroup;
  name: FormControl;
  loadedGroup: Group;
  id: string;
  paramsSubscription: Subscription;

  constructor(
    private _route: ActivatedRoute,
    private _groupService: GroupService,
    private _router: Router,
    private _fb: FormBuilder
  ){
    this.name = new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])
    );

    this.form = _fb.group({
      "name": this.name
    });
  }

  editGroup(id: string){
    this._groupService.editGroup(this.loadedGroup);
    this._router.navigateByUrl('groups');
  }

  ngOnInit(){
    this.paramsSubscription = this._route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.loadedGroup = this._groupService.getGroup(this.id);
  }

  ngOnDestroy(){
    this.paramsSubscription.unsubscribe();
  }
}

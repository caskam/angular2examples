import { Component } from '@angular/core';
import { ClientListComponent } from './clients/components/client-list.component';
import { AddClientComponent } from './clients/components/add-client.component';
import { EditClientComponent } from './clients/components/edit-client.component';
import { ClientDetailsComponent } from './clients/components/client-details.component';
import { DashboardComponent } from './dashboard/components/dashboard.component';
import { GroupListComponent } from './groups/components/group-list.component';
import { AddGroupComponent } from './groups/components/add-group.component';
import { EditGroupComponent } from './groups/components/edit-group.component';
import { ClientService } from './clients/services/client.service';
import { GroupService } from './groups/services/group.service';

@Component({
  selector: 'my-app',
  template: `
    <ul class="w3-navbar w3-green">
      <li><a routerLink='' routerLinkActive='active'>Home</a></li>
      <li><a routerLink='/clients' routerLinkActive='active'>Clients</a></li>
      <li><a routerLink='/groups' routerLinkActive='active'>Groups</a></li>
    </ul>
    <div class="container w3-padding">
        <div class="w3-row">
          <div class="w3-col m4 l3">
            <h1 class="logo"><span>Client</span>Tracker</h1>
            <ul class="w3-ul w3-border">
              <li><a routerLink='/clients/add'>Add Client</a></li>
              <li><a routerLink='/groups/add'>Add Group</a></li>
            </ul>
        </div>
        <div class="w3-col m8 l9">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  providers: [
    ClientService,
    GroupService
  ]
})
export class AppComponent  {
}

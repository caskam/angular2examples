import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { ClientListComponent } from './clients/components/client-list.component';
import { AddClientComponent } from './clients/components/add-client.component';
import { EditClientComponent } from './clients/components/edit-client.component';
import { ClientDetailsComponent } from './clients/components/client-details.component';
import { DashboardComponent } from './dashboard/components/dashboard.component';
import { GroupListComponent } from './groups/components/group-list.component';
import { AddGroupComponent } from './groups/components/add-group.component';
import { EditGroupComponent } from './groups/components/edit-group.component';
import { FilterArrayPipe } from './clients/pipe/filter.pipe';

const appRoutes: Routes = [
  { path: '',                       component: DashboardComponent },
  { path: 'clients',                component: ClientListComponent },
  { path: 'groups',                 component: GroupListComponent },
  { path: 'clients/add',            component: AddClientComponent },
  { path: 'groups/add',             component: AddGroupComponent },
  { path: 'clients/details/:id',   component: ClientDetailsComponent },
  { path: 'clients/edit/:id',      component: EditClientComponent },
  { path: 'groups/edit/:id',       component: EditGroupComponent }
];

@NgModule({
  imports:      [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)//,
    // AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientListComponent,
    ClientDetailsComponent,
    AddClientComponent,
    EditClientComponent,
    GroupListComponent,
    AddGroupComponent,
    EditGroupComponent,
    FilterArrayPipe
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

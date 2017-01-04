"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var client_list_component_1 = require('./clients/components/client-list.component');
var add_client_component_1 = require('./clients/components/add-client.component');
var edit_client_component_1 = require('./clients/components/edit-client.component');
var client_details_component_1 = require('./clients/components/client-details.component');
var dashboard_component_1 = require('./dashboard/components/dashboard.component');
var group_list_component_1 = require('./groups/components/group-list.component');
var add_group_component_1 = require('./groups/components/add-group.component');
var edit_group_component_1 = require('./groups/components/edit-group.component');
var appRoutes = [
    { path: '', component: dashboard_component_1.DashboardComponent },
    { path: 'clients', component: client_list_component_1.ClientListComponent },
    { path: 'groups', component: group_list_component_1.GroupListComponent },
    { path: 'clients/add', component: add_client_component_1.AddClientComponent },
    { path: 'groups/add', component: add_group_component_1.AddGroupComponent },
    { path: 'clients/details/:id', component: client_details_component_1.ClientDetailsComponent },
    { path: 'clients/edit/:id', component: edit_client_component_1.EditClientComponent },
    { path: 'groups/edit/:id', component: edit_group_component_1.EditGroupComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot(appRoutes) //,
            ],
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                client_list_component_1.ClientListComponent,
                client_details_component_1.ClientDetailsComponent,
                add_client_component_1.AddClientComponent,
                edit_client_component_1.EditClientComponent,
                group_list_component_1.GroupListComponent,
                add_group_component_1.AddGroupComponent,
                edit_group_component_1.EditGroupComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
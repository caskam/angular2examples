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
var Observable_1 = require('rxjs/Observable');
var client_1 = require('../model/client');
var group_service_1 = require('../../groups/services/group.service');
var ClientService = (function () {
    function ClientService(_groupService) {
        this._groupService = _groupService;
        this.group = 'Web Design';
        this.clientDb = firebase.database().ref('/').child('clients');
    }
    ClientService.prototype.addNewClient = function (newClient) {
        this.clientDb.push({
            firstName: newClient.firstName,
            lastName: newClient.lastName,
            group: this.group,
            email: newClient.email,
            phone: newClient.phone,
            address: newClient.address,
            city: newClient.city,
            state: newClient.state,
            zipcode: newClient.zipcode
        });
        return;
    };
    ClientService.prototype.getClients = function () {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            var listener = _this.clientDb.on('child_added', function (snapshot) {
                var clientread = new client_1.Client(snapshot.key, snapshot.val().firstName, snapshot.val().lastName, snapshot.val().group, snapshot.val().email, snapshot.val().phone, snapshot.val().address, snapshot.val().city, snapshot.val().state, snapshot.val().zipcode);
                observer.next(clientread);
            });
        });
    };
    ClientService.prototype.getGroups = function () {
        return this._groupService.getGroups();
    };
    ClientService.prototype.getClientDetails = function (id) {
        var dbRef = firebase.database().ref("/").child('clients/' + id);
        var clientRead;
        dbRef.on('value', function (snapshot) {
            clientRead = new client_1.Client(snapshot.key, snapshot.val().firstName, snapshot.val().lastName, snapshot.val().group, snapshot.val().email, snapshot.val().phone, snapshot.val().address, snapshot.val().city, snapshot.val().state, snapshot.val().zipcode);
        });
        return clientRead;
    };
    ClientService.prototype.deleteClient = function (id) {
        var dbRef = firebase.database().ref('/').child('clients/' + id);
        dbRef.remove();
        console.log('removed');
        return;
    };
    ClientService.prototype.editClient = function (updatedClient) {
        var dbRef = firebase.database().ref('/').child('clients/' + updatedClient.id);
        dbRef.update({
            firstName: updatedClient.firstName,
            lstName: updatedClient.lastName,
            group: updatedClient.group,
            email: updatedClient.email,
            phone: updatedClient.phone,
            address: updatedClient.address,
            state: updatedClient.state,
            city: updatedClient.city,
            zipcode: updatedClient.zipcode
        });
        return;
    };
    ClientService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [group_service_1.GroupService])
    ], ClientService);
    return ClientService;
}());
exports.ClientService = ClientService;
//# sourceMappingURL=client.service.js.map
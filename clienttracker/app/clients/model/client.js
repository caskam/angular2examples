"use strict";
var Client = (function () {
    function Client(id, firstName, lastName, group, email, phone, address, city, state, zipcode) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.group = group;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zipcode = zipcode;
    }
    Client.prototype.getFilterText = function () {
        return this.firstName + (this.lastName ? this.lastName : '');
    };
    return Client;
}());
exports.Client = Client;
;
//# sourceMappingURL=client.js.map
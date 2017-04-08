"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var TEST_LOCATIONS = [
    {
        id: "347f191e810c19729de860ea",
        name: "Home"
    },
    {
        id: "347f191e810c19729de860eb",
        name: "Jack's Work"
    },
    {
        id: "347f191e810c19729de860ec",
        name: "Catherine's School"
    },
    {
        id: "347f191e810c19729de860ed",
        name: "Traveling"
    },
    {
        id: "347f191e810c19729de860ef",
        name: "Sleeping"
    },
    {
        id: "347f191e810c19729de860eg",
        name: "Mortal Peril"
    },
    {
        id: "347f191e810c19729de860eh",
        name: "Prison"
    },
    {
        id: "347f191e810c19729de860ei",
        name: "Target"
    }
];
var LocationListComponent = (function () {
    function LocationListComponent() {
        this.name = 'Weasley Clock';
        this.title = 'Weasley Clock';
        this.family = [];
        this.locations = TEST_LOCATIONS;
    }
    LocationListComponent.prototype.onSelect = function (location) {
        this.selectedLocation = location;
    };
    return LocationListComponent;
}());
LocationListComponent = __decorate([
    core_1.Component({
        selector: 'location-list',
        templateUrl: './templates/template-location.html',
    })
], LocationListComponent);
exports.LocationListComponent = LocationListComponent;
//# sourceMappingURL=location-list.component.js.map
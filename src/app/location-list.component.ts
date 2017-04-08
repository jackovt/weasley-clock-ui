import { Component } from '@angular/core';

import { FamilyMember } from './models/model-family-member';
import { Location } from './models/model-location';

const TEST_LOCATIONS: Location[] = [
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

@Component({
  selector: 'location-list',
  templateUrl: './templates/template-location.html',
})

export class LocationListComponent  {
  name = 'Weasley Clock';
  title = 'Weasley Clock';
  selectedLocation : Location;
  family: FamilyMember[] = [];
  locations: Location[] = TEST_LOCATIONS;

  onSelect(location: Location) {
    this.selectedLocation = location;
  }
}

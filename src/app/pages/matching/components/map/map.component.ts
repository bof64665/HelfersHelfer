import { Component, OnInit } from '@angular/core';
import { tileLayer, latLng, circle, polygon, marker, icon } from 'leaflet';
import { Hospital, FirebaseService, Helper, HelperHelper } from 'src/app/services/firebase/firebase.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  private helpers: Helper[];
  private hospitals: Hospital[];

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      { maxZoom: 18, attribution: '...' })
    ],
    zoom: 13,
    center: latLng(49.016196, 12.097291)
  };

  layers = [
  ];

  constructor(public firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.firebaseService.getHelper().then(helpers => {
      this.helpers = helpers;

      this.firebaseService.getHospitals().then(hospitals => {
        this.hospitals = hospitals;

        let layers = [];

        this.helpers.forEach(helper => {
            layers.push(marker([ helper.latitude, helper.longitude ],
              {icon: icon({
                iconSize: [ 50, 40 ],
                iconAnchor: [ 25, 25 ],
                iconUrl: 'assets/helper.png',
              })}
              ).bindPopup(`<b>Helfer</b><br><br>Name: ${helper.firstname} ${helper.lastname}`).openPopup());
        });
        this.hospitals.forEach(hospital => {
          layers.push(marker([ hospital.latitude, hospital.longitude ],
            {icon: icon({
              iconSize: [ 50, 50 ],
              iconAnchor: [ 25, 25 ],
              iconUrl: 'assets/hospital.png',
            })}
            ).bindPopup(`<b>Krankenhaus</b><br><br>Name: ${hospital.name}`).openPopup());
        });

        this.layers = layers;
      });
    });
  }

}

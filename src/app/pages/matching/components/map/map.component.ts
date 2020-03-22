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
  private helperhelpers: HelperHelper[];

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

      this.firebaseService.getHelperHelper().then(helperhelpers => {
        this.helperhelpers = helperhelpers;

        let layers = [];

        this.helpers.forEach(helper => {
            layers.push(marker([ helper.latitude, helper.longitude ],
              {icon: icon({
                iconSize: [ 25, 41 ],
                iconAnchor: [ 13, 41 ],
                iconUrl: 'assets/uni.png',
              })}
              ).bindPopup(`<b>Helfer</b><br><br>Name: ${helper.firstname} ${helper.lastname}`).openPopup());
        });
        this.helperhelpers.forEach(helperhelper => {
          layers.push(marker([ helperhelper.latitude, helperhelper.longitude ]).bindPopup(`<b>HelferHelfer</b><br><br>Name: ${helperhelper.firstname} ${helperhelper.lastname}`).openPopup());
        });

        this.layers = layers;
      });
    });
  }

}

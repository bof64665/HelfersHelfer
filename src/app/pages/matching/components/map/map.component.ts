import { Component, OnInit } from '@angular/core';
import { tileLayer, latLng, circle, polygon, marker } from 'leaflet';
import { Hospital, FirebaseService } from 'src/app/services/firebase/firebase.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  private hospitals: Hospital[];

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      { maxZoom: 18, attribution: '...' })
    ],
    zoom: 5,
    center: latLng(51.163361111111, 10.447683333333)
  };

  layers = [
  ];

  constructor(public firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.firebaseService.getHospitals().then(hospitals => {
      this.hospitals = hospitals;

      let layers = [];
      this.hospitals.forEach(hospital => {
          layers.push(marker([ hospital.latitude, hospital.longitude ]).bindPopup(`Name: ${hospital.name}<br> City: ${hospital.city}`).openPopup());
      });
      this.layers = layers;
    });
  }

}

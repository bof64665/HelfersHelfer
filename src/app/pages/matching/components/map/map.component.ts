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
      console.log(helpers);

      this.firebaseService.getHospitals().then(hospitals => {
        this.hospitals = hospitals;

        let layers = [];

        this.helpers.forEach(helper => {
          let helpertext = `<b>Helfer</b><br><br>${helper.firstname} ${helper.lastname}<br><br>Benötigt Hilfe bei:<br><ul>`;
          helper.helpBy.forEach(help => {
            helpertext += `<li>${help} <a href="">Hilfe anbieten</a></li>`;
          });
          helpertext += '</ul>';
          layers.push(marker([ helper.latitude, helper.longitude ],
            {icon: icon({
              iconSize: [ 50, 40 ],
              iconAnchor: [ 25, 25 ],
              iconUrl: 'assets/helper.png',
            })}
            ).bindPopup(helpertext).openPopup());
        });
        this.hospitals.forEach(hospital => {
          layers.push(marker([ hospital.latitude, hospital.longitude ],
            {icon: icon({
              iconSize: [ 50, 50 ],
              iconAnchor: [ 25, 25 ],
              iconUrl: 'assets/hospital.png',
            })}
            ).bindPopup(`
                <h6>Krankenhaus</h6>
                <br/>
                    ${hospital.name}
                <br/>
                <br/>
                <b>Spenden an das Personal: </b>
                <br/>
                <br/>
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="B2ABTGYHD6K9S" />
                <input type="image" src="https://www.paypalobjects.com/en_US/DK/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                <img alt="" border="0" src="https://www.paypal.com/en_DE/i/scr/pixel.gif" width="1" height="1" />
                </form>
                <br/>
                <a href="https://www.bitcoinqrcodemaker.com" target="_blank">
                    <img src="https://www.bitcoinqrcodemaker.com/api/?style=bitcoincash&address=qpw5ptqvf3gutpskykvhwmnmtkgj3x8z2sk5ylqhv8" height="150" width="150" border="0" alt="Bitcoin Cash QR Code" />
                </a>

            `).openPopup());
        });

        this.layers = layers;
      });
    });
  }

}

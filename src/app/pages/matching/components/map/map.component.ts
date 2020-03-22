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
              ).bindPopup(`<b>Helfer</b><br><br>${helper.firstname} ${helper.lastname}`).openPopup());
        });
        this.hospitals.forEach(hospital => {
          layers.push(marker([ hospital.latitude, hospital.longitude ],
            {icon: icon({
              iconSize: [ 50, 50 ],
              iconAnchor: [ 25, 25 ],
              iconUrl: 'assets/hospital.png',
            })}
            ).bindPopup(`
                <b>Krankenhaus</b>
                <br/>
                <br/>
                    ${hospital.name}
                <br/>
                <br/>
                <h5>Spenden an das Personal: </h5>

                 <br/>
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick" />
<input type="hidden" name="hosted_button_id" value="a" />
<input type="image" src="https://www.paypalobjects.com/en_US/DK/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
<img alt="" border="0" src="https://www.paypal.com/en_DE/i/scr/pixel.gif" width="1" height="1" />
</form>
<br/>
<iframe src='https://donatebutton.cash/e?a=qqdzf26jnwp0fqnwvk93h9dftradq4833u9kpuxg3f&l=Spende' width='150' height='150' style='border:none;overflow:hidden'></iframe>

            `).openPopup());
        });

        this.layers = layers;
      });
    });
  }

}

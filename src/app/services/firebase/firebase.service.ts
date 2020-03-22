import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  helpers: Helper[] = [
    {
      firstname: 'Sepp',
      lastname: 'Huber',
      address: '',
      verified: true,
      helpBy: ['Einkäufe erledigen', 'Hund ausführen'],
      rating: '',
      latitude: 49.013748,
      longitude: 12.083179
    },
    {
      firstname: 'Anna',
      lastname: 'Müller',
      address: '',
      verified: true,
      helpBy: ['Einkäufe erledigen', 'Hund ausführen'],
      rating: '',
      latitude: 49.010376,
      longitude: 12.105823
    },
    {
      firstname: 'Angela',
      lastname: 'Merkel',
      address: '',
      verified: true,
      helpBy: ['Einkäufe erledigen', 'Hund ausführen'],
      rating: '',
      latitude: 49.018667,
      longitude: 12.105687
    },
    {
      firstname: 'Peter',
      lastname: 'Söder',
      address: '',
      verified: true,
      helpBy: ['Einkäufe erledigen', 'Hund ausführen'],
      rating: '',
      latitude: 49.022297,
      longitude: 12.086740
    },
    {
      firstname: 'Sepp',
      lastname: 'Huber',
      address: '',
      verified: true,
      helpBy: ['Einkäufe erledigen', 'Hund ausführen'],
      rating: '',
      latitude: 49.020486,
      longitude: 12.058422
    },
  ];

  hospitals: Hospital[] =[
    {
      name: "Universitätsklinikum Regensburg",
      address: "Franz-Josef-Strauss Allee 11",
      postcode:"93053",
      city:"Regensburg",
      longitude:12.089136,
      latitude:48.987642
    },
    {
      name:"Caritas Krankenhaus St. Josef",
      name2:"Anaesthesiologie und Intensivmedizin",
      address:"Landshuter Str. 65",
      postcode:"93053",
      city:"Regensburg",
      longitude:12.117537,
      latitude:49.007758
    },
    {
      name:"Krankenhaus Barmherzige Brüder Regensburg",
      name2:"Pneumologie und konservative Intensivmedizin",
      address:"Prüfeninger Straße 86",
      postcode:"93049",
      city:"Regensburg",
      longitude:12.07968,
      latitude:49.05215
    }
    ];

  constructor(private firestore: AngularFirestore) { }

  public async getHospitals(): Promise<Hospital[]> {
    // const hospitals: Observable<any[]> = this.firestore.collection('Intensivdb').valueChanges();
    // return hospitals.pipe(first()).toPromise() as Promise<Hospital[]>;
    return new Promise((resolve, reject)=>{
      resolve(this.hospitals)
    })
  }

  public async getHelper(): Promise<Helper[]> {
    // const helpers: Observable<any[]> = this.firestore.collection('Helfer').valueChanges();
    // return helpers.pipe(first()).toPromise() as Promise<Helper[]>;
    return new Promise((resolve, reject)=>{
      resolve(this.helpers)
    })
  }

  public async getHelperHelper(): Promise<HelperHelper[]> {
    const HelperHelpers: Observable<any[]> = this.firestore.collection('HelferHelfer').valueChanges();
    return HelperHelpers.pipe(first()).toPromise() as Promise<HelperHelper[]>;
  }
}

export interface Hospital {
  address?: string;
  city: string;
  name: string;
  name2?: string;
  postcode?: string;
  longitude?: number;
  latitude?: number;
}

export interface Helper {
  firstname: string;
  lastname: string;
  address: string;
  verified: boolean;
  helpBy: string[];
  rating: string;
  longitude: number;
  latitude: number;
}

export interface HelperHelper {
  firstname: string;
  lastname: string;
  address: string;
  verified: string;
  helpWith: string[];
  longitude: number;
  latitude: number;
}

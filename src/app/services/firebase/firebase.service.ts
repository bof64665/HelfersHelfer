import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }

  public async getHospitals(): Promise<Hospital[]> {
    const hospitals: Observable<any[]> = this.firestore.collection('Intensivdb').valueChanges();
    return hospitals.pipe(first()).toPromise() as Promise<Hospital[]>;
  }

  public async getHelper(): Promise<Helper[]> {
    const helpers: Observable<any[]> = this.firestore.collection('Helfer').valueChanges();
    return helpers.pipe(first()).toPromise() as Promise<Helper[]>;
  }
}

export interface Hospital {
  address?: string;
  city: string;
  name: string;
  name2?: string;
  postcode?: string;
  longitude?: string;
  latitude?: string;
}

export interface Helper {
  firstname: string;
  lastname: string;
  address: string;
  verified: string;
  helpWith: string[];
  rating: string;
}

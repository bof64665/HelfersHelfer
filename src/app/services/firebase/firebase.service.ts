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
  verified: string;
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

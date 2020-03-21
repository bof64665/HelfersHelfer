import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }

  public getKHList (){
    this.firestore.collection('Intensivdb').valueChanges().subscribe(x =>{
      console.log(x);
    })
  }
}

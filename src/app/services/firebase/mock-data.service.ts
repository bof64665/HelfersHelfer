import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  constructor() { }

  userMenu = [ ];

  loggedInUser = null;

  users = [
    {
      id: '1',
      name: 'Anna Meier',
      location: 'Regensburg',
      plz: '93053',
      institution: 'Universitätsklinikum Regensburg',
      mail: 'anna.maier@ukr.de',
      pw: 'anna',
      verified: true,
      rating: 4,
      type: 'Helfer',
      job: 'Sanitäter',
      img: './assets/demo_helfer.png'
    },
    {
      id: '2',
      name: 'Sepp Huber',
      location: 'Regensburg',
      plz: '93047',
      mail: 'sepp@huber.de',
      pw: 'sepp',
      verified: true,
      rating: 4,
      type: 'HelfersHelfer',
      job: 'Chief Executive Facility Manager',
      img: './assets/demo_helfer.png'
    },
  ];

  helpRequests = [
    {
      userId: '1',
      id: '1',
      description: 'Es wäre super nett, wenn jemand für mich einkaufen gehen könnte...',
      timestamp: 'Sa., 21.03.2020',
    },
    {
      userId: '1',
      id: '2',
      description: 'Ich hätte ein paar wichtige Briefe zur Post zu bringen.',
      timestamp: 'Mo., 23.03.2020',
    },
  ];

  helpOffers = [
    {
      userId: '2',
      request: {
        userId: '1',
        id: '1',
        description: 'Es wäre super nett, wenn jemand für mich einkaufen gehen könnte...',
        timestamp: 'Sa., 21.03.2020',
      }
    }
  ];

  updateUserMenu() {
    this.userMenu = [];

    const userMenuProfile = {
      title: 'Profil',
      icon: 'person-outline',
      link: `/profile/${this.loggedInUser.id}`
    };
    const userMenuLogOut = {
      title: 'Ausloggen',
      icon: 'unlock-outline'
    };
    const userMenuHelpOffer = {
      title: 'Ich will helfen!',
      icon: 'navigation-2-outline',
      link: '/matching',
    };
    const userMenuHelpRequest = {
      title: 'Ich brauche Hilfe!',
      icon: 'search-outline',
      link: `/hilfeGesuche/${this.loggedInUser.id}`
    };

    this.userMenu.push(userMenuProfile);
    this.userMenu.push(this.loggedInUser.type === 'Helfer' ? userMenuHelpRequest : userMenuHelpOffer);
    this.userMenu.push(userMenuLogOut);
  }
}

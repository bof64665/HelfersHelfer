import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  constructor() { }

  userMenu = [
    {
      title: 'Profile',
      icon: 'person-outline',
      link: '/profile/1'
    },
    {
      title: 'Log out',
      icon: 'unlock-outline'
    }
  ];

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
    this.userMenu = [
      {
        title: 'Profile',
        icon: 'person-outline',
        link: `/profile/${this.loggedInUser.id}`
      },
      {
        title: 'Log out',
        icon: 'unlock-outline'
      }
    ];
  }
}

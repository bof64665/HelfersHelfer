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
      name: 'Anna Maier',
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
      img: './assets/demo_helfershelfer.png'
    },
    {
      id: '3',
      name: 'Harald Töpfer',
      location: 'Regensburg',
      plz: '93047',
      mail: 'harald@toepfer.de',
      pw: 'sepp',
      verified: true,
      rating: 4,
      type: 'Helfer',
      job: 'Krankenschwester',
      img: './assets/people/bro1.png'
    },
    {
      id: '4',
      name: 'Florian Auer',
      location: 'Augsburg',
      plz: '86150',
      mail: 'florian@auer.de',
      pw: 'sepp',
      verified: true,
      rating: 4,
      type: 'Helfer',
      job: 'Krankenschwester',
      img: './assets/people/bro2.png'
    },
    {
      id: '5',
      name: 'Adalbert Schwafel',
      location: 'Regensburg',
      plz: '93049',
      institution: 'Universitätsklinikum Regensburg',
      mail: 'adalbert.schwafel@ukr.de',
      pw: 'adalbert',
      verified: true,
      rating: 5,
      type: 'Helfer',
      job: 'Pfleger',
      img: './assets/people/bro3.png'
    },
    {
      id: '6',
      name: 'Rita Kimmkorn',
      location: 'Regensburg',
      plz: '93051',
      institution: 'Krankenhaus Barmherzige Brüder',
      mail: 'rita.kimmkorn@barmherzige-regensburg.de',
      pw: 'rita',
      verified: true,
      rating: 5,
      type: 'Helfer',
      job: 'Krankenschwester',
      img: './assets/people/sis1.png'
    },
    {
      id: '7',
      name: 'Magdalena Ebernhofer',
      location: 'Regensburg',
      plz: '93053',
      institution: 'Caritas Krankenhaus St.Josef',
      mail: 'magdalena.ebernhofer@caritasstjosef.de',
      pw: 'magdalena',
      verified: true,
      rating: 4,
      type: 'Helfer',
      job: 'Krankenschwester',
      img: './assets/people/sis2.png'
    },
    {
      id: '8',
      name: 'Rebekka Heldt',
      location: 'Regensburg',
      plz: '93059',
      institution: 'Universitätsklinikum Regensburg',
      mail: 'rebekka.heldt@ukr.de',
      pw: 'rebekka',
      verified: true,
      rating: 4,
      type: 'Helfer',
      job: 'Sanitäter',
      img: './assets/people/sis3.png'
    }
  ];

  helpRequests = [
    {
      userId: '1',
      id: '1',
      description: 'Einkauf übernehmen',
      timestamp: 'Sa., 21.03.2020',
    },
    {
      userId: '3',
      id: '2',
      description: 'Hund Gassi führen',
      timestamp: 'Mo., 23.03.2020',
    },
    {
      userId: '4',
      id: '3',
      description: 'Post abholen',
      timestamp: 'Mi., 25.03.2020',
    },
    {
      userId: '5',
      id: '4',
      description: 'Fahrradreparatur',
      timestamp: 'Fr., 27.03.2020',
    },
    {
      userId: '6',
      id: '5',
      description: 'Wäsche waschen',
      timestamp: 'Di., 24.03.2020',
    },
    {
      userId: '7',
      id: '6',
      description: 'Kinderbetreuung',
      timestamp: 'Di., 24.03.2020',
    },
    {
      userId: '8',
      id: '7',
      description: 'Autoreparatur',
      timestamp: 'Di., 24.03.2020',
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

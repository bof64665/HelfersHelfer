import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

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

  constructor() { }

}

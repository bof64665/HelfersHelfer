import { MockDataService } from './../../../services/firebase/mock-data.service';
import { Component } from '@angular/core';
import { NbMenuService } from '@nebular/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    public dataService: MockDataService,
    private router: Router,
    private menuService: NbMenuService,
  ) {
    this.menuService.onItemClick().subscribe( data => {
      if (data.item.title === 'Ausloggen') {
        this.dataService.loggedInUser = null;
        this.router.navigate(['login']);
      }
    });
  }
}

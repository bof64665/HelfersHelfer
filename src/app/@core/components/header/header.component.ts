import { MockDataService } from './../../../services/firebase/mock-data.service';
import { Component } from '@angular/core';
import { NbMenuService } from '@nebular/theme';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    public dataService: MockDataService,
  ) { }
}

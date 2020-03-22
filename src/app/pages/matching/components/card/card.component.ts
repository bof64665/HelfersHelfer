import { MockDataService } from './../../../../services/firebase/mock-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  currentRequestIndex = 0;
  currentHelpRequest: any = { };
  helper: any = { };

  constructor(
    public dataService: MockDataService,
  ) { }

  ngOnInit(): void {
    this.getNextHelpRequest();
  }

  onHelp() {
    this.dataService.helpOffers.push({
      userId: this.dataService.loggedInUser.id,
      request: this.currentHelpRequest,
    });
    this.getNextHelpRequest();
  }

  onRefuse() {
    this.getNextHelpRequest();
  }

  getNextHelpRequest() {
    if (this.currentRequestIndex < this.dataService.helpRequests.length) {
      this.currentHelpRequest = this.dataService.helpRequests[this.currentRequestIndex];
      this.helper = this.dataService.users.find( user => user.id === this.currentHelpRequest.userId);
    } else {
      this.currentHelpRequest = null;
    }
    this.currentRequestIndex++;
  }
}

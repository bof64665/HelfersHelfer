import { MockDataService } from './../../services/firebase/mock-data.service';
import { Component, OnInit } from '@angular/core';
import { NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';
import { ActivatedRoute, Router } from '@angular/router';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface Entry {
  userId: string;
  name: string;
  distance: string;
  rating: number;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  defaultColumns = ['distance', 'rating'];
  nameColumn = 'name';
  allColumns = [ this.nameColumn, ...this.defaultColumns];
  columnsMapping = [
    {name: 'name', title: 'Name'},
    {name: 'distance', title: 'Entfernung'},
    {name: 'rating', title: 'Bewertung'}
  ];

  helpRequests = [ ];

  newHelpRequest = {
    userId: '',
    id: '',
    description: '',
    timestamp: null
  };

  dataSource: NbTreeGridDataSource<Entry>;

  constructor(
    private dataSourceBuilder: NbTreeGridDataSourceBuilder<Entry>,
    private route: ActivatedRoute,
    private router: Router,
    public dataService: MockDataService) { }

  private data: TreeNode<Entry>[] = [ ];

  ngOnInit(): void {
    this.helpRequests = this.dataService.helpRequests.filter( request => request.userId === this.route.snapshot.paramMap.get('userId'));
    this.newHelpRequest.userId = this.route.snapshot.paramMap.get('userId');
    this.newHelpRequest.id = this.helpRequests.length.toString();
    this.buildTable();
    this.dataSource = this.dataSourceBuilder.create(this.data);
  }

  buildTable() {
    const helpOffers = this.dataService.helpOffers.filter (offer => offer.request.userId === this.route.snapshot.paramMap.get('userId'));
    helpOffers.map( helpOffer => {
      const helpersHelper = this.dataService.users.find( user => user.id === helpOffer.userId);
      this.data.push({
        data: {
          userId: helpersHelper.id,
          name: helpersHelper.name,
          distance: '0.8km',
          rating: helpersHelper.rating,
        }
      });
    });
  }

  onAddHelpRequest() {
    this.dataService.helpRequests.push({
      userId: this.newHelpRequest.userId,
      id: this.newHelpRequest.id,
      description: this.newHelpRequest.description,
      timestamp: this.newHelpRequest.timestamp.format('dd., DD.MM.YYYY')
    });
    this.helpRequests = this.dataService.helpRequests.filter( request => request.userId === this.route.snapshot.paramMap.get('userId'));
    this.newHelpRequest.id = this.helpRequests.length.toString();
    this.newHelpRequest.description = '';
    this.newHelpRequest.timestamp = null;
  }

  onLinkClick(event: any) {
    this.dataService.users.find( user => user.name === event.target.text);
    this.router.navigate([`profile/${this.dataService.users.find( user => user.name === event.target.text).id}`]);
  }
}

import { Component, OnInit } from '@angular/core';
import { NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface Entry {
  name: string;
  distance: string;
  availability: string;
  rating: number;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  defaultColumns = ['name', 'distance', 'availability', 'rating'];
  defaultColumnsMapping = [
    {name: 'name', title: 'Name'},
    {name: 'distance', title: 'Entfernung'},
    {name: 'availability', title: 'Tag und Uhrzeit'},
    {name: 'rating', title: 'Bewertung'}
  ];

  helpRequest = {
    description: 'HILFE',
    timestamp: 'Sa, 21.03.2020',
  };

  helpRequests = [
    {
      description: 'HILFE',
      timestamp: 'Sa, 21.03.2020',
    },
  ];

  newHelpRequest = {
    description: '',
    timestamp: null
  };

  dataSource: NbTreeGridDataSource<Entry>;

  constructor(dataSourceBuilder: NbTreeGridDataSourceBuilder<Entry>) {
    this.dataSource = dataSourceBuilder.create(this.data);
  }

  private data: TreeNode<Entry>[] = [
    {
      data: { name: 'Projects', distance: '1.8 MB', rating: 5, availability: 'dir' }
    },
    {
      data: { name: 'Reports', availability: 'dir', distance: '400 KB', rating: 2 }
    }
  ];

  ngOnInit(): void {
  }

  onAddHelpRequest() {
    this.helpRequests.push({
      description: this.newHelpRequest.description,
      timestamp: this.newHelpRequest.timestamp.format('dd, DD.MM.YYYY')
    });
    this.newHelpRequest.description = '';
    this.newHelpRequest.timestamp = null;
    console.log(this.helpRequests);
  }

}

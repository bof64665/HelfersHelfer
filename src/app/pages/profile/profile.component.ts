import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileEditing = false;
  user = {
    location: 'Regensburg',
    plz: '93053',
    institution: 'Universitätsklinikum Regensburg',
    mail: 'anna.maier@ukr.de',
    verified: true,
    rating: 4,
  };

  helpRequests = [
    {
      description: 'HILFE',
      timestamp: 'test',
    }
  ];

  newHelpRequest = {
    description: '',
    timestamp: ''
  };

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('userId'));
  }

  onEditProfile() {
    this.profileEditing = true;
  }

  onSaveProfile() {
    console.log('save profile');
  }

  onCancelEdit() {
    this.profileEditing = false;
  }

}

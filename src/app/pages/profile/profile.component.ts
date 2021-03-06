import { MockDataService } from './../../services/firebase/mock-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileEditing = false;
  helfer = false;
  user = null;

  constructor(
    private route: ActivatedRoute,
    public dataService: MockDataService,
  ) {
    route.paramMap.subscribe( paramMap => {
      this.user = this.dataService.users.find( user => user.id === paramMap.get('userId'));
      this.helfer = this.user.type === 'Helfer' ? true : false;
    });
  }

  ngOnInit(): void {
    this.user = this.dataService.users.find( user => user.id === this.route.snapshot.paramMap.get('userId'));
    this.helfer = this.user.type === 'Helfer' ? true : false;
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

  numbers(n: number): number[] {
    return [...Array(n).keys()];
  }
}

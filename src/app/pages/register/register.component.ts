import { MockDataService } from './../../services/firebase/mock-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  mail: string;
  pw: string;

  constructor(
    private dataService: MockDataService,
    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  onLogin() {
    const loggedInUser = this.dataService.users.find(( user: any ) => {
      return user.mail === this.mail && user.pw === this.pw;
    });
    if (loggedInUser) {
      this.dataService.loggedInUser = loggedInUser;
      this.router.navigate([`profile/${this.dataService.loggedInUser.id}`]);
    }
  }
}

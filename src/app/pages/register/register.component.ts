import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  username: string;
  pw: string;

  constructor() { }

  ngOnInit(): void {

  }

  onLogin() {
    console.log(`user: ${this.username} | pw: ${this.pw}`);
  }
}

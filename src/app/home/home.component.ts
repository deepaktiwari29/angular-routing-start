import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
// import { stat } from 'fs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  status:  string;
  constructor(private router : Router,
              private authService : AuthService) { }

  ngOnInit() {
    if(this.authService.isAuthenticated()) {
      this.status = "Logged in! Welcome.";
    this.status = "Logged out. Please login.";
    } else {
      this.status = "Logged out. Please login.";
    }
  }

  onLoadServers(id : number) {
    this.router.navigate(['/servers', id, 'edit'],
                {queryParams: {allowEdit: '0'}, fragment: 'loading'});
  }

  onLogin() {
    this.authService.login();
    this.status = "Logged in! Welcome.";
  }

  onLogout() {
    this.authService.logOut();
    this.status = "Logged out. Please login.";
  }

}

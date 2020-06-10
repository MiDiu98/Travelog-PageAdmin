import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models';
import { UserService, AuthenticationService } from 'src/app/_services';
import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  currentUser: User;
  currentUserSubscription: Subscription;
  lastestUsers: User[] = [];
  users: User[] = [];
  userData: any;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
      this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
          this.currentUser = user;
      });
  }

  ngOnInit(): void {
    this.getLastestUsers();
    this.getAll();
  }

  getLastestUsers() {
    this.userService.getLastestUsers().pipe(first()).subscribe(response => {
      console.log(response);
      this.lastestUsers = response.Data;
      console.log(this.lastestUsers);
    });
  }

  getAll() {
    this.userService.getAll().pipe(first()).subscribe(users => {
      console.log(users);
      this.users = users.Data;
      console.log(this.users);
    });
  }
}


import { AlertService } from './../../_services/alert.service';
import { HttpEvent } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
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
  disabledUsers: User[] = [];
  userData: any;
  showLastestUser = true;
  showActiveUser = false;
  showDisabledUser = false;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService
  ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
      this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
          this.currentUser = user;
      });
  }

  ngOnInit(): void {
    this.getLastestUsers();
    this.getAll();
    this.getUserDisabled();
  }

  getUserDisabled() {
    this.userService.getUserDisabled().subscribe(response => {
      this.disabledUsers = response.Data;
    })
  }

  getLastestUsers() {
    this.userService.getLastestUsers().pipe(first()).subscribe(response => {
      this.lastestUsers = response.Data;
    });
  }

  getAll() {
    this.userService.getAll().pipe(first()).subscribe(response => {
      this.users = response.Data;
    });
  }

  onChange(userId: number, username: string, event) {
      const checked = event.target.checked;
      if (!checked) {
        this.userService.updateUserByAdmin(userId, 0).subscribe(
          data => {
            this.alertService.success("Updated user " + username, true);
            this.getLastestUsers();
            this.getAll();
            this.getUserDisabled();
          },
          error => {
            this.alertService.error("Cannot update user " + username, true);
          }
        )
      }
    }

    onActive(userId: number, username: string, event) {
      const checked = event.target.checked;
      if (checked) {
        this.userService.updateUserByAdmin(userId, 1).subscribe(
          data => {
            this.alertService.success("Updated user " + username, true);
            this.getLastestUsers();
            this.getAll();
            this.getUserDisabled();
          },
          error => {
            this.alertService.error("Cannot update user " + username, true);
          }
        )
      }
    }
}


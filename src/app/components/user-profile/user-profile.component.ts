import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService, AuthenticationService } from 'src/app/_services';
import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { UserProfileService } from 'src/app/_services/user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user: User;
  currentUser: User;
  currentUserSubscription: Subscription;

  constructor(private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private userProfile: UserProfileService) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
      this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
          this.currentUser = user;
      });
    }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
    this.userProfile.getProfile().pipe(first()).subscribe(reponse => {
      console.log(reponse);
      this.user = reponse;
      console.log(this.user);
    });
  }
}

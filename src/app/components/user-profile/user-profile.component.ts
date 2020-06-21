import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService, AuthenticationService, AlertService } from 'src/app/_services';
import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { UserProfileService } from 'src/app/_services/user-profile.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user: User;
  currentUser: User;
  currentUserSubscription: Subscription;
  updateProfile: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private userService: UserService) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
      this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
          this.currentUser = user;
      });
    }

  ngOnInit(): void {
    this.updateProfile = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      detail: ['', Validators.required],
    });
    this.getProfile();
  }

  getProfile() {
    this.userService.getProfile().pipe(first()).subscribe(reponse => {
      console.log(reponse);
      this.user = reponse;
      this.f.username.setValue(this.user.username);
      this.f.password.setValue(this.user.password);
      this.f.detail.setValue(this.user.detail);
    });
  }

  get f() { return this.updateProfile.controls; }

  onSubmit() {
    console.log(this.f.password.value);
    this.userService.updateProfile(this.f.username.value, this.f.password.value, this.f.detail.value)
      .pipe(first())
      .subscribe(reponse => {
        console.log(reponse);
        this.user = reponse;
        console.log(this.user);
      })
  }
}

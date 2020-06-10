import { Injectable } from '@angular/core';

import { User } from '../_models/user';
import { Constant } from 'src/constants/constant';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(private http: HttpClient) { }

  getProfile() {
    return this.http.get<any>(Constant.USERS_PROFILE_URL);
  }
}

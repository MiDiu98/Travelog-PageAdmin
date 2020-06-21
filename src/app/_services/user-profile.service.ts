import { Injectable } from '@angular/core';

import { User } from '../_models/user';
import { Constant } from 'src/constants/constant';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(private http: HttpClient) { }

  public getProfile() {
    return this.http.get<any>(Constant.USERS_PROFILE_URL);
  }

  public updateProfile(id: number, username: string, password: string, detail: string) {
    if (password == null) {
      return this.http.put<any>(Constant.USER_URL + id, {username, detail});
    }
    return this.http.put<any>(Constant.USER_URL + id, {username, password, detail});
  }
}

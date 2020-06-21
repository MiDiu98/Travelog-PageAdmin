import { Constant } from 'src/constants/constant';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, IUserListData } from '../../app/_models/user';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
    // private apiURL = Constant.COMMON_URL;

    // users: User[];

    // constructor(private http: HttpClient) {

    //   this.getData(extends);
    // }

    // getData(extends: string) {
    //    return this.http.get(this.apiURL + extends).map((response: Response) => response.json());
    // }

    // getAll() {
    //   getData().this.service.function
    //     .subscribe(data => {
    //       console.log(data);
    //       this.users = data;
    //     });

    // }
    constructor(private http: HttpClient) { }

    public getAll(page: number = 1, rows: number = 5, sortBy: string = 'updated', order: string = 'desc') {
        return this.http.get<any>(Constant.USERS_URL + `?page=${page - 1}&rows_per_page=${rows}&sort_by=${sortBy}&sort_order=${order}`);
    }

    public getLastestUsers() {
        return this.http.get<any>(Constant.USER_URL + `/last4?`);
    }

    public getUserDisabled() {
        return this.http.get<any>(Constant.URL_API + '/admin/api/users/disabled');
    }

    public getUsersMonthlyFigure() {
        return this.http.get<any>(Constant.USERS_URL + '/register-figure');
    }

    public register(user: User) {
        return this.http.post(`/users/register`, user);
    }

    public getProfile() {
      return this.http.get<any>(Constant.USERS_PROFILE_URL);
    }

    public updateProfile(username: string, password: string, detail: string) {
      if (password === '') {
        return this.http.put<any>(Constant.USER_URL, {username, detail});
      } else {
        return this.http.put<any>(Constant.USER_URL, {username, password, detail});
      }
    }

    public updateUserByAdmin(id: number, active: number) {
      return this.http.put<any>(Constant.URL_API + '/admin/api/user/' + id, {active});
    }

    public delete(id: number) {
        return this.http.delete(`/users/${id}`);
    }
}

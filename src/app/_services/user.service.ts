import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { User } from '../_models';
import {Constant} from 'src/constants/constant';

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

    getAll() {
        return this.http.get<any>(Constant.USERS_URL + `?page=1&rows_per_page=3&sort_by=email&sort_order=asc`);
    }

    getLastestUsers() {
        return this.http.get<any>(Constant.USER_URL + `/last4?`);
    }

    register(user: User) {
        return this.http.post(`/users/register`, user);
    }

    delete(id: number) {
        return this.http.delete(`/users/${id}`);
    }
}

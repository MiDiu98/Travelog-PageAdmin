import { Injectable } from '@angular/core';

import { Post } from '../_models/post';
import {Constant} from 'src/constants/constant';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getDailyPost() {
    return this.http.get<any>(Constant.POSTS_URL + '/last4');
  }
}

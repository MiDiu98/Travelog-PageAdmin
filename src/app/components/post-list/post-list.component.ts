import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { Post } from '../../_models/post';
import { PostService } from 'src/app/_services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];

  constructor(
    private router: Router,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.loadDailyPost();
  }

  private loadDailyPost() {
    this.postService.getDailyPost().pipe(first()).subscribe(posts => {
      console.log(posts);
        this.posts = posts.Data;
        console.log(this.posts);
    });
  }

}

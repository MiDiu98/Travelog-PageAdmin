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
  dailyPosts: Post[] = [];
  blockedPosts: Post[] = [];
  enabledPosts: Post[] = [];
  showEnabledPosts = true;
  showBlockdPosts = false;

  constructor(
    private router: Router,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.getDisabledPosts();
    this.getEnabledPosts();
  }

  private getDailyPost() {
    this.postService.getDailyPost().pipe(first()).subscribe(response => {
        console.log(response);
        this.dailyPosts = response.Data;
        console.log(this.dailyPosts);
    });
  }

  private getEnabledPosts() {
    this.postService.getPostsByStatus('open').pipe(first()).subscribe(response => {
        console.log(response);
        this.enabledPosts = response.Data;
        console.log(this.enabledPosts);
    });
  }

  private getDisabledPosts() {
    this.postService.getPostsByStatus('block').pipe(first()).subscribe(response => {
        console.log(response);
        this.blockedPosts = response.Data;
        console.log(this.blockedPosts);
    });
  }

  public openPost(postId: number, event) {
    this.postService.updatePostByAdmin(postId, 'open').subscribe(response => {
      console.log(response);
      this.getEnabledPosts();
      this.getDisabledPosts();
    });
  }

  public blockPost(postId: number, event) {
    this.postService.updatePostByAdmin(postId, 'block').subscribe(response => {
      console.log(response);
      this.getEnabledPosts();
      this.getDisabledPosts();
    });
  }

}

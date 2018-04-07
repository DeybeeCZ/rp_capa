import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.styl'],
  providers:[PostService]
})
export class PostsComponent implements OnInit {

  posts:Array<any>

  constructor(protected serv:PostService) { }

  ngOnInit() {
    this.serv.getPosts().subscribe(result => this.posts=result.json())
    console.log('post',this.posts)
  }

}

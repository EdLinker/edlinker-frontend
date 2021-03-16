import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/models';

@Component({
  selector: 'app-shared-post',
  templateUrl: './shared-post.component.html',
  styleUrls: ['./shared-post.component.css']
})
export class SharedPostComponent implements OnInit {

  @Input() post!: Post;

  constructor() { }

  ngOnInit(): void {
  }

}

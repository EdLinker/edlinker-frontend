import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-shared-post',
  templateUrl: './shared-post.component.html',
  styleUrls: ['./shared-post.component.scss']
})
export class SharedPostComponent implements OnInit {

  @Input() task!: Task;

  constructor() { }

  ngOnInit(): void {}

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shared-breadcrumbs-component',
  templateUrl: 'shared-breadcrumbs.component.html',
  styleUrls: ['./shared-breadcrumbs.component.scss']
})

export class SharedBreadcrumbsComponent implements OnInit {
  constructor( public router: Router ) { }

  ngOnInit() { }
}

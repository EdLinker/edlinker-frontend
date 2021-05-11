import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  hide!: boolean;
  cats = 6;
  cat = 0;
  houseplants = 3;
  houseplant = 0;

  constructor( public router: Router) {}

  ngOnInit(): void {
    this.cat = this.getRandomInt(this.cats);
    this.houseplant = this.getRandomInt(this.houseplants);
    this.hideBreadCrumb();
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  hideBreadCrumb() {
    if (this.router.url === 'student') {
      return  this.hide = true;
    }
    return this.hide = false;
  }
}

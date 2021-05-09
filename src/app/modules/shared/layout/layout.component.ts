import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  cats = 6;
  cat = 0;
  houseplants = 3;
  houseplant = 0;

  constructor( public router: Router ) { }

  ngOnInit(): void {
    this.cat = this.getRandomInt(this.cats);
    this.houseplant = this.getRandomInt(this.houseplants);
  }

  getRandomInt(max: number) {
    console.log(this.router.url);
    return Math.floor(Math.random() * max);
  }
}

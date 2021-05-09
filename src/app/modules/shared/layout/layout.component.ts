import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
    this.cat = this.getRandomInt(this.cats);
    this.houseplant = this.getRandomInt(this.houseplants);
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
}

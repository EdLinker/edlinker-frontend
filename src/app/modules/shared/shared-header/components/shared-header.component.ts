import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-header-component',
  templateUrl: './shared-header.component.html',
  styleUrls: ['./shared-header.component.css']
})
export class SharedHeaderComponent implements OnInit {

  userData = {
    id: '63',
    role: 'teacher',
    firstName: 'Name',
    lastName: 'Surname',
    patronymic: 'Patronymic',
  };

  getUserDataForTooltip = `
    ${this.userData.role} #${this.userData.id}
    ${this.userData.lastName} ${this.userData.firstName} ${this.userData.patronymic}
  `;

  constructor() { }

  ngOnInit(): void {
  }

}

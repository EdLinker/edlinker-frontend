import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  groupName: string;
  subjectName: string;
  courceNumber: string;
  numberOfStudents: string;
  groupLeaderName: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {groupName: '224', subjectName: 'фізика', courceNumber: '2', numberOfStudents: '16', groupLeaderName: 'Пономарчук Bалерій'},
  {groupName: '226', subjectName: 'фізика', courceNumber: '2', numberOfStudents: '18', groupLeaderName: 'Боднаренко Ніна'},
  {groupName: '112', subjectName: 'хімія', courceNumber: '1', numberOfStudents: '27', groupLeaderName: 'Євгенійович Шевченко'},
];

@Component({
  selector: 'group-list',
  templateUrl: 'group-list.component.html',
  styleUrls: ['group-list.component.css'],

})

export class GroupListComponent implements OnInit {
  constructor() { }

  displayedColumns: string[] = ['groupName', 'subjectName', 'courceNumber', 'numberOfStudents', 'groupLeaderName'];
  dataSource = ELEMENT_DATA;

  ngOnInit() { }
}

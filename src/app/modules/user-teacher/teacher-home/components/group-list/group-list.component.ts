import { Component, OnInit } from '@angular/core';
import { GroupModele } from 'src/models'

const groupsData: GroupModele[] = [
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
  dataSource = groupsData;

  ngOnInit() { }
}

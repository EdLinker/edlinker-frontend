import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GroupModele } from 'src/models';

@Injectable()
export class TeacherGroupsService {
  constructor(private httpClient: HttpClient) { }

  getGroupList(): Observable<GroupModele[]> {
    return this.httpClient.get<GroupModele[]>('http://localhost:3000/groups');
  }
}

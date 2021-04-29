import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuditoriumModele } from 'src/models';

@Injectable()
export class TeacherAuditoriumsService {
  constructor(private httpClient: HttpClient) { }

  getAuditoriumsList(): Observable<AuditoriumModele[]> {
    return this.httpClient.get<AuditoriumModele[]>('https://ed-linker.herokuapp.com/api/users/3/auditoriums');
  }
}

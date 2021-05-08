import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuditoriumModel } from 'src/models';

@Injectable({
  providedIn: 'root'
})
export class TeacherAuditoriumsService {
  constructor(private httpClient: HttpClient) { }

  getAuditoriumsList(): Observable<AuditoriumModel[]> {
    return this.httpClient.get<AuditoriumModel[]>(`https://ed-linker.herokuapp.com/api/auditoriums`);
  }
}

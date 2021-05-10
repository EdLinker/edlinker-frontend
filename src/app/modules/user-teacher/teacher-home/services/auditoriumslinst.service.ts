import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuditoriumModel } from 'src/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeacherAuditoriumsService {

  url = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  getAuditoriumsList(): Observable<AuditoriumModel[]> {
    return this.httpClient.get<AuditoriumModel[]>(`${this.url}auditoriums`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuditoriumModel } from 'src/models';
import { UserState } from 'src/app/modules/shared/user-store/user-state';
import { Store } from '@ngxs/store';

@Injectable({
  providedIn: 'root'
})
export class TeacherAuditoriumsService {
  constructor(private httpClient: HttpClient, private store: Store) { }

  getAuditoriumsList(): Observable<AuditoriumModel[]> {
    return this.httpClient.get<AuditoriumModel[]>(`https://ed-linker.herokuapp.com/api/auditoriums`);
  }
}

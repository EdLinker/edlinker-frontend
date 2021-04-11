import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UserState } from 'src/app/modules/shared/user-store/user-state';
import { Role } from 'src/models';
import { User } from 'src/models/user.model';

@Injectable()
export class AuthService {

  @Select(UserState.getUser) role$!: Observable<Role[]>;

  constructor(
    private http: HttpClient,
    private store: Store
    ) { }

  login(user: User): Observable<{ token: string }> {
    return this.http.post<{ token: string }>('https://ed-linker.herokuapp.com/api/auth', user)
      .pipe(
        tap(
          ({ token }) => {
            localStorage.setItem('auth-token', token);
          }
        )
      );
  }
  getToken() {
    return localStorage.getItem('auth-token');
  }

  isAuthenticated() {
    return localStorage.getItem('auth-token');
  };

  logOut() {
    localStorage.clear();
  }
}

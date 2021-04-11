import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Role } from 'src/models';
import { User } from 'src/models/user.model';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  login(user: User): Observable<{ token: string }> {
    return this.http.post<{ token: string }>('https://ed-linker.herokuapp.com/api/auth', user)
      .pipe(
        tap(
          ({ token }) => {
            localStorage.setItem('auth-token', token);
            return token;
          }
        )
      );
  }

  getUser(): Observable<any> {
    return this.http.get('https://ed-linker.herokuapp.com/api/auth');
  }

  getRole(): Observable<any> {
    return this.getUser().pipe(
      map((data => {
        const roles: Role[] = data.roles;
        let role;
        roles.map(v => role = v.name);
        return role;
      }))
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

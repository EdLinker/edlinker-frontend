import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from 'src/models/user.model';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  login(user: User): Observable<{ token: string }> {
    return this.http.post<{ token: string }>('there will be link', user)
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

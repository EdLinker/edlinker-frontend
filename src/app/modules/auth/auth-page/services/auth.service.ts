import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from 'src/models/user.model';

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
    private route: Router
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

  getUser(): Observable<any> {
    return this.http.get('https://ed-linker.herokuapp.com/api/auth');
  }

  getToken() {
    return localStorage.getItem('auth-token');
  }

  isAuthenticated() {
    return localStorage.getItem('auth-token');
  };

  logOut() {
    localStorage.clear();
    return this.route.navigate(['auth']);
  }
}

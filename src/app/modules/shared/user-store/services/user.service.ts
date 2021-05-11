import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class UserService {
  url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get(`${this.url}auth`);
  }
}

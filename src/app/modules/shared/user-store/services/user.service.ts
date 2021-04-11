import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get('https://ed-linker.herokuapp.com/api/auth');
  }
}

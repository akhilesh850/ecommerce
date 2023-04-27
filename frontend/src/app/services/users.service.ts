import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseURL = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(`${this.baseURL}/users`);
  }

  postData(data: any): Observable<any> {
    return this.http.post(`${this.baseURL}/post`, data)
  }
}

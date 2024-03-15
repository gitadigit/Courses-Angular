import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { User } from './user.modle';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  public getUsersFromServer(): Observable<any[]> {
    return this.http.get<any[]>('https://localhost:7234/api/User')
  }
  public postUserFromServer(user: any): Observable<any> {
    return this.http.post('https://localhost:7234/api/User', user)
  }
  public getLecturesFromServer(): Observable<any[]> {
    return this.http.get<any[]>('https://localhost:7234/api/Lecturer')
  }
}

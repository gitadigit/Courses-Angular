import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private isRegisteredSubject = new BehaviorSubject<boolean>(false);
  isRegistered$ = this.isRegisteredSubject.asObservable();

  constructor(private http: HttpClient) {}
  setIsRegistered(status: boolean) {
    this.isRegisteredSubject.next(status);
  }

  public getUsersFromServer(): Observable<any[]> {
    return this.http.get<any[]>('https://localhost:7234/api/User')
  }

  public getLecturerFromServer(): Observable<any[]> {
    return this.http.get<any[]>('https://localhost:7234/api/Lecturer')
  }

  public getUserById(id: number): Observable<any> {
    return this.http.get<any>(`https://localhost:7234/api/User/${id}`)
  }

  public postUserFromServer(user: any): Observable<any> {
    return this.http.post('https://localhost:7234/api/User',user)
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  public getCoursesFromServer(): Observable<any[]> {
    return this.http.get<any[]>('https://localhost:7234/api/Courses')
  }

  public getCategoryFromServer(): Observable<any[]> {
    return this.http.get<any[]>('https://localhost:7234/api/Category')
  }

  public getLectuerFromServer(): Observable<any[]> {
    return this.http.get<any[]>('https://localhost:7234/api/Lecturer')
  }
  public postCourseFromServer(course:any): Observable<any> {
    return this.http.post('https://localhost:7234/api/Courses',course)
  }

  public getCourseById(id: number): Observable<any> {
    return this.http.get<any>(`https://localhost:7234/api/Courses/${id}`)
  }
  public puttCourseFromServer(course:any): Observable<any> {
    return this.http.put(`https://localhost:7234/api/Courses/${course.id}`,course)
  }

 
}

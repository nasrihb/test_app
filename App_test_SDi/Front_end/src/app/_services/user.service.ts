import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getusers(): Observable<any> {
    return this.http.get(`${environment.serverUrl}/users`);
  }

  create(data): Observable<any> {
    return this.http.post(`${environment.serverUrl}/users/create_user`, data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${environment.serverUrl}/users/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${environment.serverUrl}/users/${id}`);
  }

  // deleteAll(): Observable<any> {
  //   return this.http.delete(`${environment.serverUrl}`);
  // }



}

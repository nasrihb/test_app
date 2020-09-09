import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CongeService {

  constructor(private http: HttpClient) { }


  getcongesbyuser(id): Observable<any> {
    return this.http.get(`${environment.serverUrl}/conges/${id}`);
  }

  addConge(data): Observable<any> {
    return this.http.post(`${environment.serverUrl}/conges/create_conge`, data);
  }
}

import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  /***   SAVE USER   */
  public saveUser(payload: any): Observable<any> {
    return this.http.post(`${environment.baseURL}`, payload);
  }
  /** *  GET ALL USER */
  public getAllUsers(): Observable<any> {
    return this.http.get(`${environment.baseURL}`);
  }
  /** GET USER BY ID */
  public getUserById(id: any): Observable<any> {
    return this.http.get(`${environment.baseURL}/${id}`);
  }
  /*** UPDATE USER BY ID*/
  public updateUserById(id: any, payload: any): Observable<any> {
    return this.http.put(`${environment.baseURL}/${id}`, payload);
  }
  /*** DELETE */
  public deleteUserById(id: any): Observable<any> {
    return this.http.delete(`${environment.baseURL}/${id}`);
  }
}
